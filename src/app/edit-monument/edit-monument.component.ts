import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Celebrite } from '../model/celebrite.model';
import { Lieu } from '../model/lieu.model';
import { Monument } from '../model/monument.model';
import { ConsultationService } from '../service/consultation.service';
import { EditService } from '../service/edit.service';



@Component({
  selector: 'app-edit-monument',
  templateUrl: './edit-monument.component.html',
  styleUrls: ['./edit-monument.component.scss']
})
export class EditMonumentComponent {
  ELEMENT_DATA: Celebrite[] = [];
  displayedColumns: string[] = [];
  dataSource: any;
  selection: any;
  celebriteWarning: string = "";
  monumentWarning: string = "";
  selectedCommune: string = "";
  selectedMonument: string | undefined;

  monumentForm = new FormGroup({
    monument_id: new FormControl(''),
    nom: new FormControl(''),
    proprietaire: new FormControl(''),
    typeM: new FormControl(''),
    longitude: new FormControl(''),
    latitude: new FormControl(''),
  });

  celebriteForm = new FormGroup({
    celebrite_id: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    nationalite: new FormControl(''),
    epoque: new FormControl('')
  })
  
  constructor(private editService: EditService , 
              private consultationService: ConsultationService, 
              private router: Router) {
    this.consultationService.getCelebrites().subscribe((celebrites: Celebrite[]) => {
      console.log(celebrites);
      this.ELEMENT_DATA = celebrites;
      this.displayedColumns = ['select', 'celebrite_id', 'nom', 'prenom', 'nationalite', 'epoque'];
      this.dataSource = new MatTableDataSource<Celebrite>(this.ELEMENT_DATA);
      this.selection = new SelectionModel<Celebrite>(true, []);
    });
    const navigate = this.router.getCurrentNavigation();
    const state = navigate?.extras.state as {
      lieu_id: string,
      monument_id?: string
    }
    this.selectedCommune = state.lieu_id;
    this.selectedMonument = state.monument_id;
    console.log("selectedCommune: ", this.selectedCommune);
    console.log("selectedMonument: ", this.selectedMonument);
  }

  ngOnInit(): void {
    // this.consultationService.getCelebrites().subscribe((celebrites: Celebrite[]) => {
    //   console.log(celebrites);
    //   this.ELEMENT_DATA = celebrites;
    //   this.displayedColumns = ['celebrite_id', 'nom', 'prenom', 'nationalite', 'epoque'];
    //   this.dataSource = new MatTableDataSource<Celebrite>(this.ELEMENT_DATA);
    //   this.selection = new SelectionModel<Celebrite>(true, []);
    // });
  }

  createMonument() {
    this.monumentWarning = "";
    console.log(this.selection.selected);
    const monument_id = this.monumentForm.value.monument_id;
    const nom = this.monumentForm.value.nom;
    const proprietaire = this.monumentForm.value.proprietaire;
    const typeM = this.monumentForm.value.typeM;
    const longitude = this.monumentForm.value.longitude;
    const latitude = this.monumentForm.value.latitude;

    console.log(this.selection.selected);
    let monument: Monument;
    if (monument_id && nom && proprietaire && typeM && longitude && latitude) {
      console.log(monument_id, nom, proprietaire, typeM, longitude, latitude);
      monument = {
        monument_id: monument_id,
        nom: nom,
        proprietaire: proprietaire,
        typeM: typeM,
        longitude: +longitude,
        latitude: +latitude
      }
      this.editService.createMonument(monument, this.selectedCommune).subscribe((monument: Monument) => {
          console.log("created: ", monument);
          console.log("monument.monument_id: ", monument.monument_id);
          this.editService.addCelebrite(this.selection.selected, monument.monument_id).subscribe((monumentC: Monument)=>{
            console.log("monument with celebrites: ", monumentC);
            this.router.navigate(['/adminOperation']);
          })
      });
    } else {
      this.monumentWarning = "Veuillez saisir tous les éléments!";
    }
  }
  
  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Celebrite): string {
    
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.celebrite_id}`;
  }



  createCelebrite() {
    this.celebriteWarning = "";
    const celebrite_id = this.celebriteForm.value.celebrite_id;
    const nom = this.celebriteForm.value.nom;
    const prenom = this.celebriteForm.value.prenom;
    const nationalite = this.celebriteForm.value.nationalite;
    const epoque = this.celebriteForm.value.epoque;
    if (celebrite_id && nom && prenom && nationalite && epoque) {
      let celebrite: Celebrite = {
        celebrite_id: +celebrite_id,
        nom: nom,
        prenom: prenom,
        nationalite: nationalite,
        epoque: epoque
      }
      this.editService.createCelebrite(celebrite).subscribe(res =>{
        console.log(res);
        this.consultationService.getCelebrites().subscribe((celebrites: Celebrite[]) => {
          console.log(celebrites);
          this.ELEMENT_DATA = celebrites;
          this.dataSource = new MatTableDataSource<Celebrite>(this.ELEMENT_DATA);
          this.selection = new SelectionModel<Celebrite>(true, []);
        });
      });
    } else {
      this.celebriteWarning = "Veuillez saisir tous les éléments!";
    }

    
  }
}

import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../service/consultation.service';
import { Lieu } from '../model/lieu.model';
import { Departement } from '../model/departement.model';
import { Monument } from '../model/monument.model';
import { Celebrite } from '../model/celebrite.model';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  deps!: Departement[];
  lieux!: Lieu[];
  monuments!: Monument[];
  celebrites!: Celebrite[];
  selectedDepId: any;
  selectedLieuId: any;
  selectedMonumentId: any;
  // selectedCelebriteId: any;
  monumentSource: Monument[] = [];
  celebritesSource: Celebrite[] = [];
  monumentColumns: string[] = ['monument_id', 'nom', 'proprietaire', 'typeM', 'longitude', 'latitude'];
  celebriteColumns: string[] = ['celebrite_id', 'nom', 'prenom', 'nationalite', 'epoque'];

  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
    console.log(this.selectedMonumentId);
    this.consultationService.getDep().subscribe((deps: Departement[]) => {
      this.deps = deps;
    });
    this.consultationService.getLieux().subscribe((lieux: Lieu[]) => {
      this.lieux = lieux;
    });
    this.consultationService.getMonuments().subscribe((monuments: Monument[]) => {
      this.monuments = monuments;
    });
      // this.consultationService.getCelebrites().subscribe((celebrites: Celebrite[]) => {
      //   this.celebrites = celebrites;
      // });
  }

  changeDep(): void {
    console.log(this.selectedDepId);
    this.consultationService.getLieuByDepId(this.selectedDepId).subscribe((lieuxByDepId: Lieu[]) => {
      this.lieux = lieuxByDepId;
    })
  }

  changeLieu(): void {
    console.log(this.selectedLieuId);
    this.consultationService.getMonumentsByLieuId(this.selectedLieuId).subscribe((monumentsByLieuId: Monument[]) => {
      this.monuments = monumentsByLieuId;
    })
  }

  changeMonument(): void {
    console.log(this.selectedMonumentId);
    // this.consultationService.getCelebritesByMonumentId(this.selectedMonumentId).subscribe((celebritesByMonumentId: Celebrite[]) => {
    //   this.celebrites = celebritesByMonumentId;
    // });
    this.consultationService.getMonumentById(this.selectedMonumentId).subscribe((monument: Monument) => {
      this.monumentSource = [];
      this.monumentSource.push(monument);
    });
    this.consultationService.getCelebritesByMonumentId(this.selectedMonumentId).subscribe((celebrites: Celebrite[]) => {
      this.celebritesSource = celebrites;
      console.log(this.celebritesSource);
    })
  }

}

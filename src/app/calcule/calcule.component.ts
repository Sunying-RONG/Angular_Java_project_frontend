import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Lieu } from '../model/lieu.model';
import { Monument } from '../model/monument.model';
import { MonumentGroup } from '../model/monumentGroup.model';
import { ConsultationService } from '../service/consultation.service';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.component.html',
  styleUrls: ['./calcule.component.scss']
})

export class CalculeComponent {
  lieux!: Lieu[];
  selectedMonumentId: any;

  monumentControl = new FormControl('');
  monumentGroups: MonumentGroup[] = [];

  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
    console.log(this.selectedMonumentId);

    this.consultationService.getLieux().subscribe((lieux: Lieu[]) => {
      this.lieux = lieux;
      this.lieux.forEach((lieu: Lieu) => {
        this.consultationService.getMonumentsByLieuId(lieu.lieu_id).subscribe((monumentsByLieuId: Monument[]) => {
          const obj: MonumentGroup = {
            lieu_nom: lieu.nom,
            monuments: monumentsByLieuId,
          }
          this.monumentGroups.push(obj);
        });
      });
    });
  }

  
}
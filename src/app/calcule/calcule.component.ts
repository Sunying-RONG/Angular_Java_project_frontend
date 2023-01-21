import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { combineLatest, map } from 'rxjs';
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
  selectedMonumentAId: any;
  selectedMonumentBId: any;
  distance: any;

  monumentControl = new FormControl('');
  monumentGroups: MonumentGroup[] = [];

  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
    console.log(this.distance);

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
  changeMonument() {
    console.log("selectedMonumentAId: ", this.selectedMonumentAId);
    console.log("selectedMonumentBId: ", this.selectedMonumentBId);

    if (this.selectedMonumentAId && this.selectedMonumentBId) {
      combineLatest({
        monumentA: this.consultationService.getMonumentById(this.selectedMonumentAId),
        monumentB: this.consultationService.getMonumentById(this.selectedMonumentBId)
      }).pipe(
        map(response => {
          const monumentA = response.monumentA;
          const monumentB = response.monumentB;
          const coordinate: number[] = [];
          coordinate.push(monumentA.latitude, monumentA.longitude, monumentB.latitude, monumentB.longitude);
          console.log(coordinate);
          return coordinate;
        })
      ).subscribe(data => {
        console.log(data);
        let lat1: number = data[0];
        let lng1: number = data[1];
        let lat2: number = data[2];
        let lng2: number = data[3];
        this.consultationService.calculeMonumentDistance(lat1, lng1, lat2, lng2).subscribe((distance: number) => {
          this.distance = distance;
        })
      })
    }
    
  }

  
}
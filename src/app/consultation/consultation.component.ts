import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../service/consultation.service';
import { Lieu } from '../model/lieu.model';
import { Departement } from '../model/departement.model';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  deps!: Departement[];
  lieux!: Lieu[];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
      this.consultationService.getDep().subscribe((deps: Departement[]) => {
        console.log(deps);
        this.deps = deps;
      })
      this.consultationService.getLieux().subscribe((data: Lieu[]) => {
        console.log(data);
        this.lieux = data;
      })
  }
}

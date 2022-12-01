import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../consultation.service';
import { Lieu } from '../model/lieu';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  lieux!: Lieu[];

  constructor(private consultationService: ConsultationService) {}

  ngOnInit(): void {
      this.consultationService.getLieux().subscribe((data: Lieu[]) => {
        console.log(data);
        this.lieux = data;
      })
  }
}

import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationComponent } from '../consultation/consultation.component';

@Component({
  selector: 'app-admin-operation',
  templateUrl: './admin-operation.component.html',
  styleUrls: ['./admin-operation.component.scss']
})
export class AdminOperationComponent {
  @ViewChild('consultation') consultation!: ConsultationComponent;
  username = localStorage.getItem("adminLogin");
  
  constructor(private router: Router) {}

  logout(): void {
    console.log("logout");
    localStorage.removeItem("adminLogin");
    this.router.navigate(['/role']);
  }

  modifyM() {
    console.log(this.consultation.selectedMonumentId);
  }

  addM() {

  }

  deleteM() {

  }
  
}
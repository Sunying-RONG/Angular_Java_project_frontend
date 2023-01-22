import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationComponent } from '../consultation/consultation.component';
import { EditService } from '../service/edit.service';

@Component({
  selector: 'app-admin-operation',
  templateUrl: './admin-operation.component.html',
  styleUrls: ['./admin-operation.component.scss']
})
export class AdminOperationComponent {
  @ViewChild('consultation') consultation!: ConsultationComponent;
  username = localStorage.getItem("adminLogin");
  
  constructor(private router: Router, private editService: EditService) {}

  logout(): void {
    console.log("logout");
    localStorage.removeItem("adminLogin");
    this.router.navigate(['/role']);
  }

  addM() {
    this.router.navigate(['/editMonument'], { state: { lieu_id: this.consultation.selectedLieuId }});
  }

  modifyM() {
    this.router.navigate(['/editMonument'], { state: { 
      lieu_id: this.consultation.selectedLieuId, 
      monument_id: this.consultation.selectedMonumentId}});
  }



  deleteM() {
    const monument_id = this.consultation.selectedMonumentId;
    this.editService.deleteMonument(monument_id).subscribe(res => {
      console.log(res);
      this.consultation.selectedMonumentId = "";
      this.consultation.ngOnInit();
    })
  }
  
}
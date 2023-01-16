import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CalculeComponent } from './calcule/calcule.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', redirectTo: 'role', pathMatch: 'full' },
  { path: 'role', component: RoleComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'calcule', component: CalculeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOperationComponent } from './admin-operation/admin-operation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from './auth/auth.guard';
import { CalculeComponent } from './calcule/calcule.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { EditMonumentComponent } from './edit-monument/edit-monument.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', redirectTo: 'role', pathMatch: 'full' },
  { path: 'role', component: RoleComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'calcule', component: CalculeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminOperation', component: AdminOperationComponent, canActivate: [AuthGuard] },
  { path: 'editMonument', component: EditMonumentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

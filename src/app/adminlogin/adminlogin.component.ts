import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {
  admin: Admin | undefined;
  warning: string = "";
  error: string = "";
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private adminService: AdminService, private router: Router) {}

  onSubmit() {
    this.warning = "";
    this.error = "";
    console.warn(this.profileForm.value);
    const usernameInput = this.profileForm.value.username;
    const passwordInput = this.profileForm.value.password;
    if (usernameInput && passwordInput) {
      this.admin = {
        username: usernameInput,
        password: passwordInput
      }
      this.adminService.adminLogin(this.admin).subscribe(login => {
        console.log("admin login :", login);
        if (login) {
          localStorage.setItem("adminLogin", usernameInput);
          this.router.navigate(['/adminOperation']);
          
        } else {
          this.error = "'username' ou 'password' n'est pas correct !";
        }
      })
    } else {
      this.warning = "Veuillez saisir 'username' et 'password' !";
    }
    
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private authService: AuthService, private router: Router){};
  canActivate(
    root: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean 
    {
      console.log('CanActivate called');
      let isLoggedIn = this.authService.isAuthenticated();
      if (!isLoggedIn){
        this.router.navigate(['/role']);
        return false
      }
      return true
    }
}

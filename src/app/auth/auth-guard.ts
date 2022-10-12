import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, from } from 'rxjs';
import { CognitoService } from '../cognito.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cognitoService: CognitoService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isAuth = this.cognitoService.isAuthenticated()
      console.log("isAuth");
      if(!isAuth) {
        
        this.router.navigate(['/signin'])
      }
      return isAuth;
  }
  
}

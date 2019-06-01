import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { OAuthService } from 'angular-oauth2-oidc';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private oauthService:OAuthService,private router:Router,
    private navController:NavController) { 
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Check if token valid "+this.oauthService.hasValidAccessToken());
    if (this.oauthService.hasValidAccessToken()) {
      console.log('returnig true');
      return true;
    }
    this.navController.navigateRoot('/landing');
    return false;
  }
}

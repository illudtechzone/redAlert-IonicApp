import { NavController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HomeRedirectService implements CanActivate {

  constructor(private oauthService: OAuthService, private router: Router, private navController: NavController) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.oauthService.hasValidIdToken()) {
      this.navController.navigateRoot('/home');
      return false;
    }

    return true;
  }
}

import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  kcAdminClient: KeycloakAdminClient;
  username: string='';
  password: string='';
  agreement: boolean;
  constructor(private http: HttpClient,private oauthService : OAuthService,
   private navCtrl:NavController) { 
  }

  ngOnInit() {
    this.agreement = false;
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
        baseUrl: 'http://35.237.193.86:8080/auth'

     });
    this.configureKeycloakAdmin();
  }

  configureKeycloakAdmin() {
    this.kcAdminClient.auth({
      username: 'admin',
      password: 'admin',
      grantType: 'password',
      clientId: 'admin-cli'
    });
  }
  tryLogin() {
    console.log('username =',this.username,'  passwrd ',this.password);
    this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(
      this.username,
      this.password,
      new HttpHeaders()
    ) .then(() => {
      console.log('in then ...............');
      const claims = this.oauthService.getIdentityClaims();
      if (claims) {
        console.log(claims);
      }
      if (this.oauthService.hasValidAccessToken()) {
        console.log('got valid token ............',this.oauthService.hasValidAccessToken());
        this.navCtrl.navigateForward('/home');
      }
    })
    .catch((err: HttpErrorResponse) => {
    console.log('err ',err.error.error_description);
    });
  }

}

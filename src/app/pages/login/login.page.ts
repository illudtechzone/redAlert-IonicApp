import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  constructor(private http: HttpClient, private oauthService: OAuthService,
   private navCtrl: NavController) {
  }

  ngOnInit() {

  }


  tryLogin() {
    console.log('username =', this.username, '  passwrd ', this.password);
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
        console.log('got valid token ............', this.oauthService.hasValidAccessToken());
        this.navCtrl.navigateForward('/home');
      }
    })
    .catch((err: HttpErrorResponse) => {
    console.log('err ', err.error.error_description);
    });
  }

  loginDisabled() {

  }
  registerDisabled() {

  }

}

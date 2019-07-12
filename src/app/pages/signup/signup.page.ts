import { CurrentUserService } from './../../security/current-user.service';
import { NavController } from '@ionic/angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Component, OnInit } from '@angular/core';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CommandResourceService } from 'src/app/api/services';
import { User } from 'src/app/api/models/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  kcAdminClient: KeycloakAdminClient;
  username = '';
  password = '';
  email = '';
  firstName = '';
  agreement: boolean;
  constructor(private oauthService: OAuthService,
              private navCtrl: NavController,
              private commandResource: CommandResourceService,
              private currentUserService: CurrentUserService
    ) { }

  ngOnInit() {
    this.agreement = false;
    this.kcAdminClient = new KeycloakAdminClient();
    this.kcAdminClient.setConfig({
        baseUrl: 'http://35.225.108.188:8020/auth'

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
  signup() {

    this.kcAdminClient.users.create({
      realm : 'RedAlert',
      username : this.username,
      firstName : this.firstName,
      email : this.email,
      enabled : true,
      credentials: [{
        type: 'password',
        value: this.password
      }]
    }).then(res => {
      this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.username, this.password, new HttpHeaders()).then(() => {
        const claims = this.oauthService.getIdentityClaims();
        if (claims) { console.log(claims); }
        if (this.oauthService.hasValidAccessToken()) {
        console.log('Signup successfully completed');
           const user: User = {};
          this.currentUserService.getCurrentUser(false).then((resu: any) => {

            user.name = resu.firstName;
            user.userId = resu.id;
            console.log('current user is>>>>>>>>>', resu);
            this.commandResource.createUserUsingPOST(user).subscribe(result3 => {
                console.log('creating user in backend sucess ', result3);

            },
            error3=>{
              console.log('error creating user in backend',error3);
            });          });
          this.navCtrl.navigateForward('login');
        }
      }).catch((err: HttpErrorResponse) => {
        // this.presentToast(err.error.error_description);
        console.log('Signup successfully completed', err);
      });
      this.navCtrl.navigateForward('/login');
    }, err => {
      console.log(err);
      console.log('user already exists');
    });

  }
}

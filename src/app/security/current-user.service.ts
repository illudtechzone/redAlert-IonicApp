import { AccountResourceService } from 'src/app/shared/gateway-api/services';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { UserDTO } from '../shared/gateway-api/models';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private user: UserDTO = undefined;
  constructor(private oauthService: OAuthService, private accountservice: AccountResourceService) { }

  async getCurrentUser(force: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      if (force || this.user === undefined) {
        this.accountservice.getAccountUsingGET().subscribe( (user) => {
          this.user = user;
          resolve(this.user);
        },
        (error) => {
            console.log('error' + error);
            this.user = undefined;
            reject(null);
        });
      } else {
        resolve(this.user);
      }
    });
  }
}

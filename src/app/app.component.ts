import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://35.237.193.86:8080/auth/realms/RedAlert',
  redirectUri: window.location.origin,
  clientId: 'account',
  scope: 'openid profile email',
  dummyClientSecret: 'b7e88785-0e1f-4f03-ade1-e8d986a7e116',
  tokenEndpoint: 'http://35.237.193.86:8080/auth/realms/RedAlert/protocol/openid-connect/token',
  userinfoEndpoint: 'http://35.237.193.86:8080/auth/realms/RedAlert/protocol/openid-connect/userinfo',
  oidc: false,
  requireHttps: false
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'News',
      url: '/news',
      icon: 'paper'
    },
    {
      title: 'History',
      url: '/history',
      icon: 'time'
    },
    {
      title: 'Friends',
      url: '/friends',
      icon: 'people'
    },
  ];
  public appCSPages = [
    {
      title: 'Home',
      url: '/cshome',
      icon: 'home'
    },
    {
      title: 'Friends',
      url: '/csfriends',
      icon: 'people'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oauthService: OAuthService
    ) {
      this.initializeApp();
      this.configureOAuth();
    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
    configureOAuth(): any {
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      // Load Discovery Document and then try to login the user
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
  }

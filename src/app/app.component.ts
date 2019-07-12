import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://35.225.108.188:8020/auth/realms/RedAlert',
  redirectUri: window.location.origin,
  clientId: 'account',
  scope: 'openid profile email',
  dummyClientSecret: '696583a4-a141-4b51-bf60-51371d121168',
  tokenEndpoint: 'http://35.225.108.188:8020/auth/realms/RedAlert/protocol/openid-connect/token',
  userinfoEndpoint: 'http://35.225.108.188:8020/auth/realms/RedAlert/protocol/openid-connect/userinfo',
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

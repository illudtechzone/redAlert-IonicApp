import { OAuthService } from 'angular-oauth2-oidc';
import { NavController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-options-popover',
  templateUrl: './user-options-popover.component.html',
  styleUrls: ['./user-options-popover.component.scss'],
})
export class UserOptionsPopoverComponent implements OnInit {

  constructor(private navController: NavController,
              private popoverController: PopoverController,
              private oauthService: OAuthService) { }

  ngOnInit() {}

  goToProfile() {
    this.dismissPopUp();
    this.navController.navigateForward('/profile');
  }

  logout() {
    this.dismissPopUp();
    this.oauthService.logOut();
  }

  dismissPopUp() {
    this.popoverController.dismiss();
  }

}

import { CurrentUserService } from './../../security/current-user.service';
import { UserOptionsPopoverComponent } from './../../components/user-options-popover/user-options-popover.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController, Platform } from '@ionic/angular';
import { UserDTO } from 'src/app/shared/gateway-api/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit {

  user: UserDTO;
  profileName: String;
  isIOS: Boolean;
  constructor(private popoverController: PopoverController, private currentUser: CurrentUserService, private platform: Platform) { }

  async ngOnInit() {
    await this.currentUser.getCurrentUser(false).then( (user) => {
      this.user = user;
      this.profileName = this.user.firstName + ' ' + this.user.lastName;
      this.isIOS = this.platform.is('iphone');
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: UserOptionsPopoverComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true
    });
    return await popover.present();
  }

}

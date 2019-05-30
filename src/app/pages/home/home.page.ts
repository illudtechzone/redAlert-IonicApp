import { OAuthService } from 'angular-oauth2-oidc';
import { AccountResourceService, UserResourceService } from 'src/app/shared/gateway-api/services';
import { PostAlertModalComponent } from './../../components/post-alert-modal/post-alert-modal.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async openModal(alert: String) {
    const modal = await this.modalController.create({
      component: PostAlertModalComponent,
      componentProps: {alert: alert},
      backdropDismiss: true,
      showBackdrop: true
    });
    return await modal.present();
  }
}

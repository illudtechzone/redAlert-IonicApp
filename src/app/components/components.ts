import { PostAlertModalComponent } from './post-alert-modal/post-alert-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';
import { UserOptionsPopoverComponent } from './user-options-popover/user-options-popover.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQc2iiem96Es76TEOcPkcSvfHx5wpvs28'
    })
  ],
  declarations: [
    PostAlertModalComponent,
    UserOptionsPopoverComponent
  ],
  exports: [
    PostAlertModalComponent,
    UserOptionsPopoverComponent
  ]
})
export class Components {}

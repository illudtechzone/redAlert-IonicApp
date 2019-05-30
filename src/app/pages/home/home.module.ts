import { PostAlertModalComponent } from './../../components/post-alert-modal/post-alert-modal.component';
import { Components } from './../../components/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NavbarPageModule } from '../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbarPageModule,
    Components,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents: [PostAlertModalComponent],
  declarations: [HomePage],
})
export class HomePageModule {}

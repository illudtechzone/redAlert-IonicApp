import { CreateComplaintComponent } from 'src/app/components/create-complaint/create-complaint.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CshomePage } from './cshome.page';
import { NavbarPageModule } from '../navbar/navbar.module';
import { Components } from 'src/app/components/components';

const routes: Routes = [
  {
    path: '',
    component: CshomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbarPageModule,
    Components,
    RouterModule.forChild(routes)
  ],
  declarations: [CshomePage],
  entryComponents :[CreateComplaintComponent]
})
export class CshomePageModule {



}

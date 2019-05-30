import { NavbarPageModule } from './../navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FriendsPage } from './friends.page';

const routes: Routes = [
  {
    path: '',
    component: FriendsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NavbarPageModule
  ],
  declarations: [FriendsPage]
})
export class FriendsPageModule {}

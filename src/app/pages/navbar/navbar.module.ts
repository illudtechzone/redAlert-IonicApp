import { UserOptionsPopoverComponent } from './../../components/user-options-popover/user-options-popover.component';
import { Components } from './../../components/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavbarPage } from './navbar.page';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Components,
    RouterModule.forChild(routes)
  ],
  declarations: [NavbarPage],
  exports: [NavbarPage],
  entryComponents: [UserOptionsPopoverComponent]
})
export class NavbarPageModule {}

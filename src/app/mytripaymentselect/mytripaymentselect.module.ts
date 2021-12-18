import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MytripaymentselectPage } from './mytripaymentselect.page';

const routes: Routes = [
  {
    path: '',
    component: MytripaymentselectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MytripaymentselectPage]
})
export class MytripaymentselectPageModule {}

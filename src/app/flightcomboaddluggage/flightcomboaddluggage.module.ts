import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlightcomboaddluggagePage } from './flightcomboaddluggage.page';

const routes: Routes = [
  {
    path: '',
    component: FlightcomboaddluggagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlightcomboaddluggagePage]
})
export class FlightcomboaddluggagePageModule {}

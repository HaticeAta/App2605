import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyappdetailPageRoutingModule } from './myappdetail-routing.module';

import { MyappdetailPage } from './myappdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyappdetailPageRoutingModule
  ],
  declarations: [MyappdetailPage]
})
export class MyappdetailPageModule {}

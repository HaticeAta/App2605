import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyappdetailPage } from './myappdetail.page';

const routes: Routes = [
  {
    path: '',
    component: MyappdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyappdetailPageRoutingModule {}

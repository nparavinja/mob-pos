import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MojTiketPage } from './moj-tiket.page';

const routes: Routes = [
  {
    path: '',
    component: MojTiketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MojTiketPageRoutingModule {}

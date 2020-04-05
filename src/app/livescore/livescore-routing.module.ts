import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivescorePage } from './livescore.page';

const routes: Routes = [
  {
    path: '',
    component: LivescorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivescorePageRoutingModule {}

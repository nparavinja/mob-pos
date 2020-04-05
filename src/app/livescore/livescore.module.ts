import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivescorePageRoutingModule } from './livescore-routing.module';

import { LivescorePage } from './livescore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivescorePageRoutingModule
  ],
  declarations: [LivescorePage]
})
export class LivescorePageModule {}

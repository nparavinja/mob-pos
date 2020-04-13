import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MojTiketPageRoutingModule } from './moj-tiket-routing.module';

import { MojTiketPage } from './moj-tiket.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MojTiketPageRoutingModule
  ],
  declarations: [MojTiketPage]
})
export class MojTiketPageModule {}

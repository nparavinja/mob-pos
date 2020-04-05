import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MojProfilPageRoutingModule } from './moj-profil-routing.module';

import { MojProfilPage } from './moj-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MojProfilPageRoutingModule
  ],
  declarations: [MojProfilPage]
})
export class MojProfilPageModule {}

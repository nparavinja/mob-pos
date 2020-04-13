import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MojProfilPageRoutingModule } from './moj-profil-routing.module';

import { MojProfilPage } from './moj-profil.page';
import { TiketElementComponent } from './tiket-element/tiket-element.component';
import { TiketModalComponent } from './tiket-modal/tiket-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MojProfilPageRoutingModule,
    
  ],
  declarations: [MojProfilPage,TiketElementComponent,TiketModalComponent],
  // izbacuje gresku za modal komponentu - Error: No component factory found for TiketModalComponent. Did you add it to @NgModule.entryComponents?
  entryComponents:[TiketModalComponent]
})
export class MojProfilPageModule {}

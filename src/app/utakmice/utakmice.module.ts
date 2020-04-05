import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtakmicePageRoutingModule } from './utakmice-routing.module';

import { UtakmicePage } from './utakmice.page';
import { UtakmicaElementComponent } from './utakmica-element/utakmica-element.component';
import { UtakmicaDetailComponent } from './utakmica-detail/utakmica-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtakmicePageRoutingModule,
   
  ],
  declarations: [UtakmicePage, UtakmicaElementComponent, UtakmicaDetailComponent]
})
export class UtakmicePageModule {}

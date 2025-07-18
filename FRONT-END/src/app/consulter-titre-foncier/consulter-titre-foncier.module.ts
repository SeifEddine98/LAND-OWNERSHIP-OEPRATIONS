import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterTitreFoncierPageRoutingModule } from './consulter-titre-foncier-routing.module';

import { ConsulterTitreFoncierPage } from './consulter-titre-foncier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterTitreFoncierPageRoutingModule
  ],
  declarations: [ConsulterTitreFoncierPage]
})
export class ConsulterTitreFoncierPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementPageRoutingModule } from './paiement-routing.module';

import { PaiementPage } from './paiement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementPageRoutingModule
  ],
  declarations: [PaiementPage]
})
export class PaiementPageModule {}

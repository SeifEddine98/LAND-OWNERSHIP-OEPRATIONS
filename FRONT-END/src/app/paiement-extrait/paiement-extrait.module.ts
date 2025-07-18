import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementExtraitPageRoutingModule } from './paiement-extrait-routing.module';

import { PaiementExtraitPage } from './paiement-extrait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementExtraitPageRoutingModule
  ],
  declarations: [PaiementExtraitPage]
})
export class PaiementExtraitPageModule {}

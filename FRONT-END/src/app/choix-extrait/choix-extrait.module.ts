import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixExtraitPageRoutingModule } from './choix-extrait-routing.module';

import { ChoixExtraitPage } from './choix-extrait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixExtraitPageRoutingModule
  ],
  declarations: [ChoixExtraitPage]
})
export class ChoixExtraitPageModule {}

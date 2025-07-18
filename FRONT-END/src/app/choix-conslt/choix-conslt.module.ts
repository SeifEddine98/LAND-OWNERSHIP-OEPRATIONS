import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixConsltPageRoutingModule } from './choix-conslt-routing.module';

import { ChoixConsltPage } from './choix-conslt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixConsltPageRoutingModule
  ],
  declarations: [ChoixConsltPage]
})
export class ChoixConsltPageModule {}

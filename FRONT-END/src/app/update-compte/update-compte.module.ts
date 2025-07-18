import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateComptePageRoutingModule } from './update-compte-routing.module';

import { UpdateComptePage } from './update-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateComptePageRoutingModule
  ],
  declarations: [UpdateComptePage]
})
export class UpdateComptePageModule {}

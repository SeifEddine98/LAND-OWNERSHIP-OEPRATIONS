import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeReclamationPageRoutingModule } from './liste-reclamation-routing.module';

import { ListeReclamationPage } from './liste-reclamation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeReclamationPageRoutingModule
  ],
  declarations: [ListeReclamationPage]
})
export class ListeReclamationPageModule {}

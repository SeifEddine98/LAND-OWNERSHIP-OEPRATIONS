import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeClientsPageRoutingModule } from './liste-clients-routing.module';

import { ListeClientsPage } from './liste-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeClientsPageRoutingModule
  ],
  declarations: [ListeClientsPage]
})
export class ListeClientsPageModule {}

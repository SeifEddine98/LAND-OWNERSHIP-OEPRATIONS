import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterTitreFoncierAdminPageRoutingModule } from './consulter-titre-foncier-admin-routing.module';

import { ConsulterTitreFoncierAdminPage } from './consulter-titre-foncier-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterTitreFoncierAdminPageRoutingModule
  ],
  declarations: [ConsulterTitreFoncierAdminPage]
})
export class ConsulterTitreFoncierAdminPageModule {}

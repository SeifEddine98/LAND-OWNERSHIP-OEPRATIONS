import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterOpFoncAdminPageRoutingModule } from './consulter-op-fonc-admin-routing.module';

import { ConsulterOpFoncAdminPage } from './consulter-op-fonc-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterOpFoncAdminPageRoutingModule
  ],
  declarations: [ConsulterOpFoncAdminPage]
})
export class ConsulterOpFoncAdminPageModule {}

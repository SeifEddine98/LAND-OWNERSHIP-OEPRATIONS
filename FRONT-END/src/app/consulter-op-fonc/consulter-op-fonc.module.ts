import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterOpFoncPageRoutingModule } from './consulter-op-fonc-routing.module';

import { ConsulterOpFoncPage } from './consulter-op-fonc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterOpFoncPageRoutingModule
  ],
  declarations: [ConsulterOpFoncPage]
})
export class ConsulterOpFoncPageModule {}

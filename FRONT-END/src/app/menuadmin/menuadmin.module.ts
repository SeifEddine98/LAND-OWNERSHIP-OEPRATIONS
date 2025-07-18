import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuadminPageRoutingModule } from './menuadmin-routing.module';

import { MenuadminPage } from './menuadmin.page';
import { Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: MenuadminPage,
    children:[
      { path: 'home', loadChildren:'../home/home.module#HomePageModule'},
      {path: 'login', loadChildren:'../login/login.module#LoginPageModule'},

    ]
  }
  
]



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuadminPageRoutingModule
  ],
  declarations: [MenuadminPage]
})
export class MenuadminPageModule {}

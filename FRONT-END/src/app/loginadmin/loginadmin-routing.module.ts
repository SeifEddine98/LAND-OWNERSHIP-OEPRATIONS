import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginadminPage } from './loginadmin.page';

const routes: Routes = [
  {
    path: '',
    component: LoginadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginadminPageRoutingModule {}

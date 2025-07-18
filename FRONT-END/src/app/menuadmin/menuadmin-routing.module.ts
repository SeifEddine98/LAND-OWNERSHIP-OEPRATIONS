import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuadminPage } from './menuadmin.page';

const routes: Routes = [
  {
    path: '',
    component: MenuadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuadminPageRoutingModule {}

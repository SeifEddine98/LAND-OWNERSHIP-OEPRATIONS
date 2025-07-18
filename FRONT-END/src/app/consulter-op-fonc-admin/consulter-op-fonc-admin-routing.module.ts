import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterOpFoncAdminPage } from './consulter-op-fonc-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterOpFoncAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterOpFoncAdminPageRoutingModule {}

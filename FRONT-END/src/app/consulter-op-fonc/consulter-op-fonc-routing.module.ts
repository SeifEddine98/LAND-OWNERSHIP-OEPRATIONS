import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterOpFoncPage } from './consulter-op-fonc.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterOpFoncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterOpFoncPageRoutingModule {}

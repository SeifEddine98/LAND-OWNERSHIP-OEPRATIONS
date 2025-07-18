import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateComptePage } from './update-compte.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateComptePageRoutingModule {}

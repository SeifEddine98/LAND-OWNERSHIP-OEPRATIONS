import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementPage } from './paiement.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementPageRoutingModule {}

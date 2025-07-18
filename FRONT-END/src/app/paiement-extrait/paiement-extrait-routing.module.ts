import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementExtraitPage } from './paiement-extrait.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementExtraitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementExtraitPageRoutingModule {}

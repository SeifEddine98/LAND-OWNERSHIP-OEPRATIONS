import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterTitreFoncierPage } from './consulter-titre-foncier.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterTitreFoncierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterTitreFoncierPageRoutingModule {}

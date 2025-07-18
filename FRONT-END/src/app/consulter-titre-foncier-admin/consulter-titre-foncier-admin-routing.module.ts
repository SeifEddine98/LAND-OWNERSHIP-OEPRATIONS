import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterTitreFoncierAdminPage } from './consulter-titre-foncier-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterTitreFoncierAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterTitreFoncierAdminPageRoutingModule {}

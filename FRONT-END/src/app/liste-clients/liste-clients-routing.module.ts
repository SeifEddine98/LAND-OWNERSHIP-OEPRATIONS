import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeClientsPage } from './liste-clients.page';

const routes: Routes = [
  {
    path: '',
    component: ListeClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeClientsPageRoutingModule {}

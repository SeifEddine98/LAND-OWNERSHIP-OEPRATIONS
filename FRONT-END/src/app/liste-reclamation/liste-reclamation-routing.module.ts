import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeReclamationPage } from './liste-reclamation.page';

const routes: Routes = [
  {
    path: '',
    component: ListeReclamationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeReclamationPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixConsltPage } from './choix-conslt.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixConsltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixConsltPageRoutingModule {}

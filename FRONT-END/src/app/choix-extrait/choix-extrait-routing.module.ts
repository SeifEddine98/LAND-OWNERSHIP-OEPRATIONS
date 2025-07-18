import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixExtraitPage } from './choix-extrait.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixExtraitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixExtraitPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {path: 'menu', loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)},
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'update-compte',
    loadChildren: () => import('./update-compte/update-compte.module').then( m => m.UpdateComptePageModule)
  },
  {
    path: 'consulter-titre-foncier',
    loadChildren: () => import('./consulter-titre-foncier/consulter-titre-foncier.module').then( m => m.ConsulterTitreFoncierPageModule)
  },
  {
    path: 'consulter-op-fonc',
    loadChildren: () => import('./consulter-op-fonc/consulter-op-fonc.module').then( m => m.ConsulterOpFoncPageModule)
  },
  {
    path: 'liste-clients',
    loadChildren: () => import('./liste-clients/liste-clients.module').then( m => m.ListeClientsPageModule)
  },
  {
    path: 'menuadmin',
    loadChildren: () => import('./menuadmin/menuadmin.module').then( m => m.MenuadminPageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./loginadmin/loginadmin.module').then( m => m.LoginadminPageModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('./paiement/paiement.module').then( m => m.PaiementPageModule)
  },
  {
    path: 'paiement-extrait',
    loadChildren: () => import('./paiement-extrait/paiement-extrait.module').then( m => m.PaiementExtraitPageModule)
  },
  {
    path: 'choix-conslt',
    loadChildren: () => import('./choix-conslt/choix-conslt.module').then( m => m.ChoixConsltPageModule)
  },
  {
    path: 'choix-extrait',
    loadChildren: () => import('./choix-extrait/choix-extrait.module').then( m => m.ChoixExtraitPageModule)
  },
  {
    path: 'consulter-op-fonc-admin',
    loadChildren: () => import('./consulter-op-fonc-admin/consulter-op-fonc-admin.module').then( m => m.ConsulterOpFoncAdminPageModule)
  },
  {
    path: 'consulter-titre-foncier-admin',
    loadChildren: () => import('./consulter-titre-foncier-admin/consulter-titre-foncier-admin.module').then( m => m.ConsulterTitreFoncierAdminPageModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('./reclamation/reclamation.module').then( m => m.ReclamationPageModule)
  },
  {
    path: 'liste-reclamation',
    loadChildren: () => import('./liste-reclamation/liste-reclamation.module').then( m => m.ListeReclamationPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

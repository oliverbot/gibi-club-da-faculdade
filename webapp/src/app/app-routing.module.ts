import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/home-page/home.module').then(mod => mod.HomeModule)},
  { path: 'catalog',
    loadChildren: () => import('./pages/catalog-page/catalog.module').then(mod => mod.CatalogModule)},
  { path: 'login',
    loadChildren: () => import('./pages/login-page/loginpage.module').then(mod => mod.LoginModule)},
  { path: 'register',
    loadChildren: () => import('./pages/register-page/registerpage.module').then(mod => mod.RegisterModule)}
//  { path: 'dog',
//    loadChildren: () => import('./dog-route/dog.module').then(mod => mod.DogModule)},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

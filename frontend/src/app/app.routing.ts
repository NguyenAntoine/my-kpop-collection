import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ComponentsComponent },
    { path: 'albums', loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule) },
    { path: 'idols', loadChildren: () => import('./modules/idols/idols.module').then(m => m.IdolsModule) },
    { path: 'bands', loadChildren: () => import('./modules/bands/bands.module').then(m => m.BandsModule) },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'signup',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBandComponent} from './components/list-band/list-band.component';

const routes: Routes = [
    {path: '', component: ListBandComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListIdolComponent} from './components/list-idol/list-idol.component';

const routes: Routes = [
  {path: '', component: ListIdolComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdolsRoutingModule { }

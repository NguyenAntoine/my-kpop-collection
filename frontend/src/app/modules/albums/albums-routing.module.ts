import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAlbumComponent} from './components/list-album/list-album.component';

const routes: Routes = [
  {path: '', component: ListAlbumComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }

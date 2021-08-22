import { NgModule } from '@angular/core';

import { AlbumsRoutingModule } from './albums-routing.module';
import { ListAlbumComponent } from './components/list-album/list-album.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [ListAlbumComponent],
  imports: [
    SharedModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }

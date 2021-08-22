import { Injectable } from '@angular/core';
import {ResourceService} from '../../api/resource.service';
import {HttpClient} from '@angular/common/http';
import {Album} from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends ResourceService<Album> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'albums');
  }
}

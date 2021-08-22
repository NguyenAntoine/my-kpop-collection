import { Injectable } from '@angular/core';
import {ResourceService} from '../../api/resource.service';
import {Band} from '../models/band.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandService extends ResourceService<Band> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'bands');
  }
}

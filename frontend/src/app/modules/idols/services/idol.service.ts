import { Injectable } from '@angular/core';
import {ResourceService} from '../../api/resource.service';
import {HttpClient} from '@angular/common/http';
import {Idol} from '../models/idol.model';

@Injectable({
  providedIn: 'root'
})
export class IdolService extends ResourceService<Idol> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'idols');
  }
}

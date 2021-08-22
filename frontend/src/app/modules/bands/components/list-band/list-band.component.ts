import { Component, OnInit } from '@angular/core';
import {BandService} from '../../services/band.service';
import {Band} from '../../models/band.model';

@Component({
  selector: 'app-list-band',
  templateUrl: './list-band.component.html',
  styleUrls: ['./list-band.component.scss']
})
export class ListBandComponent implements OnInit {
  bands: Band[] = []

  constructor(private bandService: BandService) { }

  ngOnInit(): void {
    this.bandService.list().subscribe(bands => this.bands = bands);
  }

}

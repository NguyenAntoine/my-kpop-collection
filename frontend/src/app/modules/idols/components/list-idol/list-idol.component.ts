import { Component, OnInit } from '@angular/core';
import {Idol} from '../../models/idol.model';
import {IdolService} from '../../services/idol.service';

@Component({
  selector: 'app-list-idol',
  templateUrl: './list-idol.component.html',
  styleUrls: ['./list-idol.component.scss']
})
export class ListIdolComponent implements OnInit {
  idols: Idol[] = []

  constructor(private idolService: IdolService) { }

  ngOnInit(): void {
    this.idolService.list().subscribe(idols => this.idols = idols);
  }

}

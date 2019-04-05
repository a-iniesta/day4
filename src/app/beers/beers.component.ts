import { Component, OnInit, Input } from '@angular/core';
import IBeer from '../interfaces/IBeer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  @Input() beerInfo: IBeer;
  // allBeersInfo: Array<IBeer>

  constructor() { }

  ngOnInit() {
    
  }
}

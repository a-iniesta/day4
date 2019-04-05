import { Component, OnInit } from '@angular/core';
import IBeer from './interfaces/IBeer';
import { BeersService } from './beers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'beers-project';
  allBeersInfo: Array<IBeer>
  allBeersInfoFiltered: Array<IBeer>
  filter: number;

  constructor(private beersService: BeersService) {}

  ngOnInit() {
    this.beersService.getAllBeers().then((allBeersInfoPayload: Array<IBeer>) => {
      this.allBeersInfo = this.allBeersInfoFiltered = allBeersInfoPayload;
    })
  }

  onClick() {
    this.allBeersInfoFiltered = this.allBeersInfo.filter(b => b.id === 5)
  }

  filterChanged(id) {
    if (id === "") {
      this.allBeersInfoFiltered = this.allBeersInfo
    } else {
      this.allBeersInfoFiltered = this.allBeersInfo.filter(b => b.id === +id)
    }
  }
}

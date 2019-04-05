import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IBeer from './interfaces/IBeer';

@Injectable()
export class BeersService {

  constructor(private httpClient: HttpClient) { }

  getAllBeers():Promise<Array<IBeer>> {
    return this.httpClient.get(`http://localhost:3000/beers`)
    .toPromise()
    .then((beerPayload: Array<IBeer>) => beerPayload)
  }

  getBeerByID(beerID):Promise<IBeer> {
    return this.httpClient.get(`http://localhost:3000/beer/${beerID}`)
    .toPromise()
    .then((beerPayload: IBeer) => beerPayload)
  }
}

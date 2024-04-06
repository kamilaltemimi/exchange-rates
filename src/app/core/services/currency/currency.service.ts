import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rate } from '../../interfaces/rate';
import { Rates } from '../../interfaces/rates';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url: string = "http://api.nbp.pl/api/exchangerates/tables/a/"

  constructor(
    private http: HttpClient
  ) { }

  getCurrencyRates(): Observable<Rates> {
    return this.http.get<Rates>(this.url)
  }
  
}

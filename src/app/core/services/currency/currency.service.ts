import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyRate } from '../../interfaces/currency-rate';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url: string = "http://api.nbp.pl/api/exchangerates/tables/a/"

  constructor(
    private http: HttpClient
  ) { }

  getCurrencyRates(): Observable<CurrencyRate[]> {
    return this.http.get<CurrencyRate[]>(this.url)
  }
  
}

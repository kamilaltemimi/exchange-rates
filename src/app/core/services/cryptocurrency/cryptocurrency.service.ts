import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptocurrencyRates } from '../../interfaces/cryptocurrency-rates';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyService {

  url: string = "https://api.coincap.io/v2/rates"

  constructor(
    private http: HttpClient) { }

  getData(): Observable<CryptocurrencyRates> {
    return this.http.get<CryptocurrencyRates>(this.url)
  }
}

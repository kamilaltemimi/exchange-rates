import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/core/services/currency/currency.service';
import { CurrencyRate } from 'src/app/core/interfaces/currency-rate';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit{

  currencyRates: CurrencyRate[] = []
  selectedCurrency: CurrencyRate | undefined 


  constructor(
    private currencyService: CurrencyService
  ){}

  ngOnInit(): void {
    this.currencyService.getCurrencyRates().subscribe(
      (data: CurrencyRate[] ) => {
      this.currencyRates = data[0]?.rates;
      }
    )
  }

  selectCurrency(currency: CurrencyRate): void {
    this.selectedCurrency = currency
  }

}

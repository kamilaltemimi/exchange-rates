import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/core/services/currency/currency.service';
import { Rate } from 'src/app/core/interfaces/rate';
import { Rates } from 'src/app/core/interfaces/rates';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit{

  date = new Date()
  currencyRates: Rate[] = []

  firstSelectedCurrency: Rate | undefined 
  firstSelectedCurrencyAmount: number | undefined
  
  secondSelectedCurrency: Rate | undefined
  secondSelectedCurrencyAmount: number | undefined

  constructor(
    private currencyService: CurrencyService
  ){}

  ngOnInit(): void {
    this.currencyService.getCurrencyRates().subscribe(
      (data: Rates) => {
      this.currencyRates = data.rates
      }
    )
  }

  selectFirstCurrency(currency: Rate): void{
    this.firstSelectedCurrency = currency
    this.updateFirstCurrencyAmount()
    this.date = new Date()
  }

  selectSecondCurrency(currency: Rate): void{
    this.secondSelectedCurrency = currency
    this.updateSecondCurrencyAmount()
    this.date = new Date()
  }
  
  updateFirstCurrencyAmount(): void{
    if (this.firstSelectedCurrency && this.secondSelectedCurrency && this.firstSelectedCurrencyAmount)
      this.secondSelectedCurrencyAmount = parseFloat((this.firstSelectedCurrency?.mid * this.firstSelectedCurrencyAmount / this.secondSelectedCurrency?.mid).toFixed(2));
    if (this.firstSelectedCurrencyAmount === 0) {
      this.secondSelectedCurrencyAmount = 0;
    }
    this.date = new Date()
  }

  updateSecondCurrencyAmount(): void{
    if (this.secondSelectedCurrency && this.firstSelectedCurrency && this.secondSelectedCurrencyAmount)
      this.firstSelectedCurrencyAmount = parseFloat((this.secondSelectedCurrencyAmount * this.secondSelectedCurrency?.mid / this.firstSelectedCurrency?.mid).toFixed(2))
    if (this.secondSelectedCurrencyAmount === 0) {
      this.firstSelectedCurrencyAmount = 0;
    }
    this.date = new Date()
  }


}

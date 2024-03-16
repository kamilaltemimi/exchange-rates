import { Component, OnInit } from '@angular/core';
import { CryptocurrencyRates } from 'src/app/core/interfaces/cryptocurrency-rates';
import { CryptocurrencyService } from 'src/app/core/services/cryptocurrency/cryptocurrency.service';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit{

  cryptocurrencyRates: CryptocurrencyRates[] = []
  selectedCryptocurrency: CryptocurrencyRates | undefined

  constructor(
    private cryptocurrencyService: CryptocurrencyService
  ){}

  ngOnInit(): void {
    this.cryptocurrencyService.getData().subscribe((data: CryptocurrencyRates) => {this.cryptocurrencyRates = data?.data
    console.log(this.cryptocurrencyRates)})
  }

  selectCryptocurrency(cryptocurrency: CryptocurrencyRates){
    this.selectedCryptocurrency = cryptocurrency
  }
    
}

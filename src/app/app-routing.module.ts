import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrencyComponent } from './home/+components/currency/currency.component';
import { CryptocurrencyComponent } from './home/+components/cryptocurrency/cryptocurrency.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'currency-rate', component: CurrencyComponent},
  {path: 'cryptocurrency-rate', component: CryptocurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

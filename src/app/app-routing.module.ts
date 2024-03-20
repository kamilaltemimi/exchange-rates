import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrencyComponent } from './home/+components/currency/currency.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'currency-rate', component: CurrencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

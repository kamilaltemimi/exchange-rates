import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CurrencyComponent } from './+components/currency/currency.component';
import { CryptocurrencyComponent } from './+components/cryptocurrency/cryptocurrency.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from '../core/services/currency/currency.service';

@NgModule({
  declarations: [
    HomeComponent,
    CurrencyComponent,
    CryptocurrencyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    CurrencyService
  ]
})
export class HomeModule { }

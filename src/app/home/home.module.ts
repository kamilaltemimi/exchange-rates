import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CurrencyComponent } from './+components/currency/currency.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from '../core/services/currency/currency.service';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    HomeComponent,
    CurrencyComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    MatExpansionModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
    CurrencyService
  ]
})
export class HomeModule { }

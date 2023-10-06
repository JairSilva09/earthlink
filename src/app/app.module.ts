import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { SideCartComponent } from './side-cart/side-cart.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ProductsComponent } from './products/products.component';
import { ProductsCardComponent } from './products-card/products-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    SideCartComponent,
    MenuComponent,
    ProductsComponent,
    ProductsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    RouterModule,
    HttpClientModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

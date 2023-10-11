import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { SideCartComponent } from './side-cart/side-cart.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductsComponent } from './products/products.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { BillingComponent } from './billing/billing.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoaderComponent } from './loader/loader.component';
import { MessageComponent } from './message/message.component';
import { InstallationComponent } from './installation/installation.component';
import { MonthlyCalendarComponent } from './monthly-calendar/monthly-calendar.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { TimePipe } from './service/time.pipe';
import { Convert12HourFormatPipe } from './convert12-hour-format.pipe';
import { DateFormattedPipe } from './date-formatted.pipe';
import { RecapComponent } from './recap/recap.component';
import { MatIconModule } from '@angular/material/icon';
import { DisclosuresComponent } from './disclosures/disclosures.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DotColorComponent } from './dotcolor/dotcolor.component';
import { MarketingEmailDripComponent } from './marketing-email-drip/marketing-email-drip.component';
import { ModalAddressComponent } from './modal-address/modal-address.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    SideCartComponent,
    MenuComponent,
    ProductsComponent,
    ProductsCardComponent,
    BillingComponent,
    LoaderComponent,
    MessageComponent,
    InstallationComponent,
    MonthlyCalendarComponent,
    DateRangeComponent,
    Convert12HourFormatPipe,
    DateFormattedPipe,
    RecapComponent,
    DisclosuresComponent,
    ConfirmationComponent,
    DotColorComponent,
    MarketingEmailDripComponent,
    ModalAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    RouterModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatCheckboxModule, 
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [DatePipe, TimePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

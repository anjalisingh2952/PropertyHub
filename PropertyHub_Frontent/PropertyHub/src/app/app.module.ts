import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookPropertyComponent } from './components/book-property/book-property.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { MyPropertiesComponent } from './components/my-properties/my-properties.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyListingsComponent } from './components/property-listings/property-listings.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    BookPropertyComponent,
    MyBookingsComponent,
    MyPropertiesComponent,
    PropertyDetailsComponent,
    PropertyListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module  
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

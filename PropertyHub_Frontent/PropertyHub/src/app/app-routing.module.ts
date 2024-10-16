import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PropertyListingsComponent } from './components/property-listings/property-listings.component';
import { BookPropertyComponent } from './components/book-property/book-property.component';
import { MyPropertiesComponent } from './components/my-properties/my-properties.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: '', component: DashboardComponent,
    canActivate:[AuthGuard],    // added for authgurad
    children: [
      {path: '',redirectTo: 'home',pathMatch:'full'}, // added newly
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'property-listings', component: PropertyListingsComponent },
      { path: 'book-property', component: BookPropertyComponent},
      { path: 'my-properties', component: MyPropertiesComponent },
      { path: 'my-bookings', component: MyBookingsComponent },]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

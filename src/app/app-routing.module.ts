import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { DealerFinanceComponent } from './dealer-finance/dealer-finance.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './shared/log-in/log-in.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { VendorFinanceComponent } from './vendor-finance/vendor-finance.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dealer-finance', component: DealerFinanceComponent},
  {path: 'vendor-finance', component: VendorFinanceComponent},
  {path: 'customer-support', component: CustomerSupportComponent},
  {path: 'login' , component: LogInComponent},
  {path: 'signup' , component: SignInComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

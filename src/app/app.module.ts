import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PdpComponent } from './components/pdp/pdp.component';
import { CartComponent } from './components/cart/cart.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';


const appRoutes:Routes = [
  {path:"donut", component:HomeComponent},
  {path:"donut/:id", component:PdpComponent},
  {path:"cart", component:CartComponent},
  {path:"", redirectTo:"/donut", pathMatch:"full"},
  {path:"**", component:PagenotfoundComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PdpComponent,
    CartComponent,
    PagenotfoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

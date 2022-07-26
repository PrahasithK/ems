import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeModule } from './employee/employee.module';
import { HomeModule } from './home/home.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    EmployeeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

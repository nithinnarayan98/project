import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import {MsgserviceService} from './msgservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { AddmecComponent } from './addmec/addmec.component';
import { AddcompComponent } from './addcomp/addcomp.component';
import { DeltmecComponent } from './deltmec/deltmec.component';
import { DeltcompComponent } from './deltcomp/deltcomp.component';
import { ViewcompComponent } from './viewcomp/viewcomp.component';

const approutes:Routes=[{path:"",component:HomeComponent},{path:"login",component:LoginComponent},{path:"signup",component:SignupComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddmecComponent,
    AddcompComponent,
    DeltmecComponent,
    DeltcompComponent,
    ViewcompComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [MsgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutentService } from './service/autent.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CookieService
    
  ],
  providers: [
    AutentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
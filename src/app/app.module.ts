import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './componentes/input/input.component';
import { SelectComponent } from './componentes/select/select.component';
import { TextareaComponent } from './componentes/textarea/textarea.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EstudarComponent } from './pages/estudar/estudar.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';
import { MonitorComponent } from './componentes/monitor/monitor.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule  } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    LandingComponent,
    EstudarComponent,
    InscricaoComponent,
    MonitorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Configuracion del idioma de la App
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CL';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CL'  // Se establece el idioma español para Chile
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

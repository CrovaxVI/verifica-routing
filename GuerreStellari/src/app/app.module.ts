import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StellareComponent } from './stellare/stellare.component';
import { SearchStellareComponent } from './search-stellare/search-stellare.component';
import{HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StellareComponent,
    SearchStellareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

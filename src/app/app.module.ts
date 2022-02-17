import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent ,HerosComponent ,HeroDetailComponent,MessagesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {HttpModule } from '@angular/http'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroDetailComponent } from './hero-detail.component'
import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent }  from './dashboard.component'


import { HeroService } from './hero.service'
import { HomeService } from './home/home.service'

import { routing } from './app.routing'

import { HomeComponent }  from './home/home.component'
import { FindComponent }  from './find/find.component'
import { MeComponent }  from './me/me.component'

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	InMemoryWebApiModule.forRoot(InMemoryDataService),
  	routing
  ],
  declarations: [ AppComponent,HeroesComponent,HeroDetailComponent,DashboardComponent ,HomeComponent,
    FindComponent,
    MeComponent
  ],
  providers:[
  	HeroService,
    HomeService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

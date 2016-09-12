import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HeroDetailComponent } from './hero-detail.component'
import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent }  from './dashboard.component'


import { HeroService } from './hero.service'

import { routing } from './app.routing'

@NgModule({
  imports: [ BrowserModule ,FormsModule,routing],
  declarations: [ AppComponent,HeroesComponent,HeroDetailComponent,DashboardComponent ],
  providers:[
  	HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

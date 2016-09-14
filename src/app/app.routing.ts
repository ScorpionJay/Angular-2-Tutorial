import { ModuleWithProviders }  from '@angular/core'
import { Routes,RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { FindComponent } from './find/find.component'
import { MeComponent } from './me/me.component'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component'
import { HeroDetailComponent } from './hero-detail.component'


const appRoutes: Routes = [
	{
		path:'',
		redirectTo:'/home',
		pathMatch:'full'
	},
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'find',
		component: FindComponent
	},
	{
		path:'me',
		component: MeComponent
	},
	{
		path:'heroes',
		component: HeroesComponent
	},
	{
		path:'dashboard',
		component: DashboardComponent
	},
	{
		path:'detail/:id',
		component: HeroDetailComponent
	}

]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
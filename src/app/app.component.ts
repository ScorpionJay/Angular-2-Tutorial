import { Component } from '@angular/core'

@Component({
		selector:'my-app',
		template:`
			<h1>{{title}}</h1>
			<nav>
				<a routerLink='/home'>Home</a>
				<a routerLink='/find'>Find</a>
				<a routerLink='/me'>Me</a>
			</nav>
			<router-outlet></router-outlet>
		`,
		styleUrls:['./app.style.css']
})

/*<a routerLink='/dashboard'>Dahsboard</a>
<a routerLink='/heroes'>Heroes</a>*/

export class AppComponent {
	title = 'Demo...'
}
import { Component, OnInit} from '@angular/core'

import { Hero } from '../hero';
import { HomeService } from './home.service';

@Component({
		selector:'my-home',
		templateUrl:'./home.template.html',
		styleUrls:['./home.style.css']
})

export class HomeComponent implements OnInit{
	title = 'home...'

	heroes:Hero[] = []

	constructor(
		private homeService: HomeService) {}

	ngOnInit(): void {
		this.homeService.getHeroes()
						.then(
							heroes => {this.heroes = heroes//.slice(1,5)
							console.log(heroes)
						}
						)
	}

	gotoDetail(hero:Hero):void {
		// let link = ['/detail',hero.id]
		// this.router.navigate(link)
	}

}
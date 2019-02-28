import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})

// 组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。 它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。

export class HerosComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'txq'
  }

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroSevice: HeroService) {

  }

  getHeroes(): void {
    this.heroSevice.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero.name);
  }

}

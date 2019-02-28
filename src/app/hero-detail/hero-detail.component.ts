import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../heros/hero';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // 表示hero是从外部引入的, @Input() 为一个装饰器
  @Input() hero: Hero;

  /**
   * ActivatedRoute 保存着到这个 HeroDetailComponent 实例的路由信息。 这个组件对从 URL 中提取的路由参数感兴趣。 其中的 id 参数就是要显示的英雄的 id。HeroService 从远端服务器获取英雄数据，本组件将使用它来获取要显示的英雄。location 是一个 Angular 的服务，用来与浏览器打交道。 稍后，你就会使用它来导航回上一个视图。
   * @param {ActivatedRoute} route
   * @param {HeroService} heroService
   * @param {Location} location
   */
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }
  }

  goBack(): void {
    this.location.back();
  }

}

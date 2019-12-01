import { Injectable } from '@angular/core';
import { Hero, HEROES } from './hero-child/hero';
import { forEachChild } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = HEROES;
  hero : Hero = { id:0, name:'No Name'};
  constructor() { }

  setHero( hero:Hero ){
    this.hero.id = hero.id;
    this.hero.name = hero.name;
  }

  getHero( ) { return this.hero; }

  setHeroes( hero:Hero ) {
    this.heroes.forEach( value => {
        if( value.id == hero.id ){
          value.name = hero.name
        }
    });
  }

  getHeroes() : Hero[] {
    return this.heroes;
  }
}

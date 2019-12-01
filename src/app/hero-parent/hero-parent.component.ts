import { Component, OnInit } from '@angular/core';
import { HEROES } from '../hero-child/hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes" [hero]="hero" [master]="master"></app-hero-child>
  `,
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {
  heroes = HEROES;
  master = "Master";
  constructor() { }

  ngOnInit() {
  }

}

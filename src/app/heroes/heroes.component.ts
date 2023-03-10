import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/superhero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Superhero[];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.heroes;
  }
}

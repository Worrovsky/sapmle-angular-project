import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { Superhero } from '../models/superhero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroes: Superhero[] = [
    {
      name: 'Superman',
      country: 'USA',
      birthday: '10/12/1971',
    },
    {
      name: 'Batman',
      country: 'USA',
      birthday: '1/12/1965',
    },
  ];

  constructor() {}

  add(hero: Superhero) {
    this.heroes.push(hero);
  }
}

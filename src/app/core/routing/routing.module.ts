import { NgModule } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { CreateHeroComponent } from 'src/app/create-hero/create-hero.component';
import { HeroesComponent } from 'src/app/heroes/heroes.component';

const Routes: Route[] = [
  { path: 'create', component: CreateHeroComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class RoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './core/material/material.module';
import { RoutingModule } from './core/routing/routing.module';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavContainerComponent } from './core/sidenav-container/sidenav-container.component';
import { SidenavContentComponent } from './core/sidenav-content/sidenav-content.component';
import { FormsModule } from '@angular/forms';
import { CanselConfirmDialogComponent } from './cansel-confirm-dialog/cansel-confirm-dialog.component';
import { TabsSampleComponent } from './tabs-sample/tabs-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CreateHeroComponent,
    HeroesComponent,
    SidenavContainerComponent,
    SidenavContentComponent,
    FooterComponent,
    CanselConfirmDialogComponent,
    TabsSampleComponent,
  ],
  imports: [BrowserModule, MaterialModule, RoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

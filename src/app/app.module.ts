import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBtnComponent } from '../Components/buttons/main-btn/main-btn.component';
import { NewPageComponent } from '../pages/new-page/new-page.component';
import { IndexPageComponent } from '../pages/index-page/index-page.component';
import { MenuLayoutComponent } from '../Components/menu-layout/menu-layout.component';
import {GameLayoutComponent} from '../Components/game-layout/game-layout.component';
import { CharacterCardComponent } from '../Components/character-card/character-card.component'
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MainBtnComponent,
    NewPageComponent,
    IndexPageComponent,
    MenuLayoutComponent,
    GameLayoutComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBtnComponent } from '../Components/buttons/main-btn/main-btn.component';
import { GamePageComponent } from '../pages/game-page/game-page.component';
import { IndexPageComponent } from '../pages/index-page/index-page.component';
import { MenuLayoutComponent } from '../Components/menu-layout/menu-layout.component';
import {GameLayoutComponent} from '../Components/game-layout/game-layout.component';
import { CharacterCardComponent } from '../Components/character-card/character-card.component';
import { NewPageComponent } from '../pages/new-page/new-page.component'
import {FormsModule} from "@angular/forms";
import { One2onePageComponent } from '../pages/one2one-page/one2one-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBtnComponent,
    GamePageComponent,
    IndexPageComponent,
    MenuLayoutComponent,
    GameLayoutComponent,
    CharacterCardComponent,
    NewPageComponent,
    One2onePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBtnComponent } from '../Components/buttons/main-btn/main-btn.component';
import { NewPageComponent } from '../pages/new-page/new-page.component';
import { IndexPageComponent } from '../pages/index-page/index-page.component';
import { MenuLayoutComponent } from '../Components/menu-layout/menu-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBtnComponent,
    NewPageComponent,
    IndexPageComponent,
    MenuLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

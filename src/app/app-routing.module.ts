import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//<- pages
import {IndexPageComponent} from "src/pages/index-page/index-page.component";
import {GamePageComponent} from "src/pages/game-page/game-page.component"
import {NewPageComponent} from "../pages/new-page/new-page.component";
import {One2onePageComponent} from "../pages/one2one-page/one2one-page.component";
// -> pages

const routes: Routes = [
  {
    path:'',
    component:IndexPageComponent
  },
  {
    path:'new',
    component:NewPageComponent
  },
  {
    path:'game',
    component:GamePageComponent
  },
  {
    path:'1v1',
    component:One2onePageComponent
  },
  {
    path: '**',
    component: IndexPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

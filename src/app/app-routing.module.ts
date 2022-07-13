import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//<- pages
import {IndexPageComponent} from "src/pages/index-page/index-page.component";
import {NewPageComponent} from "src/pages/new-page/new-page.component"
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

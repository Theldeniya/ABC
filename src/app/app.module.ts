import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageComponent } from './component/PageNotfound/page.component';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RecipesComponent,
    ContactComponent,
    PageComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    RouterModule
    .forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'recipes',
        component:RecipesComponent
      },
      {
        path:'pageNotfound',
        component:PageComponent
      },

    ])

  ],

  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

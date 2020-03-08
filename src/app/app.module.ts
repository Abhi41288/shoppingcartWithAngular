import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';


@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,



  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    //RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]

} )
export class AppModule { }

import { AlertComponent } from './shared/alert/alert.component';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './shared/loadingSpinner/loading-spinner.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';

import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe-list/recipe.service';


@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ShoppingListService, RecipeService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
} )
export class AppModule { }

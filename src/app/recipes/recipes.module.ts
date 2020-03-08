import { SharedModule } from './../shared/shared.module';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes.routing.module';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule( {
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeItemComponent,

    ],
    imports: [
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    // exports: [
    //     RecipesComponent,
    //     RecipeListComponent,
    //     RecipeDetailsComponent,
    //     RecipeStartComponent,
    //     RecipeEditComponent,
    //     RecipeItemComponent,
    // ]
} )
export class RecipesModule { }

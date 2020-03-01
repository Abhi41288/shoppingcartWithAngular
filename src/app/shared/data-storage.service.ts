import { RecipeService } from './../recipes/recipe-list/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable( {
    providedIn: 'root'
} )
export class DataStorageService {
    constructor( private http: HttpClient, private recipesService: RecipeService ) { }

    storeRecipe() {
        const recipes = this.recipesService.getRecipes();
        this.http.put( 'https://ng-course-recipe-book-8368f.firebaseio.com/recipes.json',
            recipes ).subscribe( response => {
                console.log( response );
            } );
    }

    fetchRecipe() {
        return this.http.get<Recipe[]>( 'https://ng-course-recipe-book-8368f.firebaseio.com/recipes.json' )
            .pipe( map( recipes => {
                return recipes.map( recipe => {
                    return { ...recipe, ingredients: recipe.ingredient ? recipe.ingredient : [] };
                } );
            } ), tap( recipes => {
                this.recipesService.setRecipes( recipes );
            } )
            );
    }
}

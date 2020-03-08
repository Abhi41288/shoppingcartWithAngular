import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe-list/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, exhaustMap, take } from 'rxjs/operators';

@Injectable( {
    providedIn: 'root'
} )
export class DataStorageService {
    constructor( private http: HttpClient, private recipesService: RecipeService, private authService: AuthService ) { }

    storeRecipe() {
        const recipes = this.recipesService.getRecipes();
        this.http.put( 'https://ng-course-recipe-book-8368f.firebaseio.com/recipes.json',
            recipes ).subscribe( response => {
                console.log( response );
            } );
    }

    fetchRecipe() {

        return this.http.get<Recipe[]>( 'https://ng-course-recipe-book-8368f.firebaseio.com/recipes.json' )
            .pipe(
                map( recipes => {
                    return recipes.map( recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredient ? recipe.ingredient : []
                        };
                    } );
                } ),
                tap( recipes => {
                    this.recipesService.setRecipes( recipes );
                } )

            );
    }
}

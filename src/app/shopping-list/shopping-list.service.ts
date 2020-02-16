import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
export class ShoppingListService {

    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient( 'apple', 5 ),
        new Ingredient( 'orange', 10 )
    ]

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient( ingredient: Ingredient ) {
        this.ingredients.push( ingredient );
        // this.ingredientsChanged.emit( this.ingredients.slice() );
        this.ingredientsChanged.next( this.ingredients.slice() );
    }

    addIngredients( ingredients: Ingredient[] ) {
        // for ( let ingredient of ingredients ) {
        //     this.addIngredient( ingredient );
        // }
        this.ingredients.push( ...ingredients );
        // this.ingredientsChanged.emit( this.ingredients.slice() );
        this.ingredientsChanged.next( this.ingredients.slice() );
    }
}
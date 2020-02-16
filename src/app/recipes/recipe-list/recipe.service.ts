import { Subject } from 'rxjs';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe( 'test recipe',
            'a test recipe',
            'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg?resize=700%2C%20466&ssl=1',
            [
                new Ingredient( 'meat', 1 ),
                new Ingredient( 'french fries', 20 )
            ] ),
        new Recipe( 'test recipe',
            'a test recipe',
            'https://diethood.com/wp-content/uploads/2018/10/Garlic-Butter-Baked-Salmon-12.jpg',
            [
                new Ingredient( 'buns', 1 ),
                new Ingredient( 'meat', 2 )
            ] )
    ];

    recipeSelected = new Subject<Recipe>();

    constructor( private slService: ShoppingListService ) { }

    getRecipes() {
        return this.recipes;
    }

    getRecipe( index: number ) {
        return this.recipes[index];
    }

    addIngredientToShoopingList( ingredient: Ingredient[] ) {
        this.slService.addIngredients( ingredient );
    }

}
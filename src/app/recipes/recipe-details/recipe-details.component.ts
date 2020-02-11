import { RecipeService } from './../recipe-list/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component( {
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
} )
export class RecipeDetailsComponent implements OnInit {

  //@Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor( private recipeService: RecipeService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe(
      ( params: Params ) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe( this.id );
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoopingList( this.recipe.ingredient );
  }

  onEditRecipe() {
    this.router.navigate( ['edit'], { relativeTo: this.route } );
  }

}

import { RecipeService } from './recipe-list/recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';


@Component( {
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
} )
export class RecipesComponent implements OnInit {

  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {

  }

}

import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component( {
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
} )
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe( 'test recipe', 'a test recipe', 'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg?resize=700%2C%20466&ssl=1' ),
    new Recipe( 'test recipe', 'a test recipe', 'https://diethood.com/wp-content/uploads/2018/10/Garlic-Butter-Baked-Salmon-12.jpg' )
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected( recipe: Recipe ) {
    this.recipeWasSelected.emit( recipe );
  }



}

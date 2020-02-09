import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
} )
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient( 'apples', 10 ),
    new Ingredient( 'oranges', 5 )
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded( ingredient: Ingredient ) {
    this.ingredients.push( ingredient );
  }

}

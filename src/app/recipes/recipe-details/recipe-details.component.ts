import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component( {
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
} )
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}

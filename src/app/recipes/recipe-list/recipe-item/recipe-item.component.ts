import { RecipeService } from './../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from 'events';

@Component( {
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
} )
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {
  }

  onItemselect() {
    this.recipeService.recipeSelected.emit( this.recipe );
  }

}

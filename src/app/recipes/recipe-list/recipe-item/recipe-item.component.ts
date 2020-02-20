import { RecipeService } from './../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component( {
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
} )
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {
    
  }


}

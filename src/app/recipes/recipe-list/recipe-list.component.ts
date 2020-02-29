import { Subscription } from 'rxjs';
import { RecipeService } from './recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component( {
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
} )
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  subcription: Subscription;

  constructor( private recipeService: RecipeService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.subcription = this.recipeService.recipeChanged.subscribe(
      ( recipe: Recipe[] ) => {
        this.recipes = recipe;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate( ['new'], { relativeTo: this.route } );
  }

  OnDestroy() {
    this.subcription.unsubscribe();
  }
}

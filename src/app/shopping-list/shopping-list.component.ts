
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
} )
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];

  private igChangedSub: Subscription;

  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {

    this.ingredients = this.slService.getIngredients();
    this.igChangedSub = this.slService.ingredientsChanged.subscribe(
      ( ingredient: Ingredient[] ) => {
        this.ingredients = ingredient;
      }
    );
  }

  onEditItem( index: number ) {
    this.slService.startedEditing.next( index );
  }

  ngOnDestroy() {
    this.igChangedSub.unsubscribe();
  }

}

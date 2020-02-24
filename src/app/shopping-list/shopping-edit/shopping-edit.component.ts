import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { format } from 'url';

@Component( {
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
} )
export class ShoppingEditComponent implements OnInit {

  @ViewChild( 'f', { static: false } ) slForm: NgForm;

  // @ViewChild( 'nameInput', { static: false } ) nameInputRef: ElementRef;
  // @ViewChild( 'amount', { static: false } ) amountInputRef: ElementRef;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {

    this.subscription = this.slService.startedEditing.subscribe(
      ( index: number ) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient( index );
        this.slForm.setValue( {
          name: this.editedItem.name,
          amount: this.editedItem.amount
        } );
      }
    );


  }

  onAddItem( form: NgForm ) {
    // const name = this.nameInputRef.nativeElement.value;
    // const amt = this.amountInputRef.nativeElement.value;

    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount );
    if ( this.editMode ) {
      this.slService.updateIngredient( this.editedItemIndex, newIngredient );

    } else {
      this.slService.addIngredient( newIngredient );
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient( this.editedItemIndex );
    this.onClear();
  }

  OnDestroy() {
    this.subscription.unsubscribe();
  }
}

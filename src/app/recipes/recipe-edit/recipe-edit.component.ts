import { RecipeService } from './../recipe-list/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Recipe } from '../recipe.model';

@Component( {
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
} )
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor( private route: ActivatedRoute, private recipeService: RecipeService, private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe(
      ( param: Params ) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newrecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredient']
    );
    if ( this.editMode ) {
      this.recipeService.updateRecipe( this.id, newrecipe )
      console.log( newrecipe );
    } else {
      this.recipeService.addRecipe( newrecipe )
    }
    this.onCancel();
  }

  get controls() {
    return ( <FormArray>this.recipeForm.get( 'ingredient' ) ).controls;
  }

  onAddIngredient() {
    ( <FormArray>this.recipeForm.get( 'ingredient' ) ).push(
      new FormGroup( {
        'name': new FormControl( null, Validators.required ),
        'amount': new FormControl( null, [Validators.required, Validators.pattern( /^[1-9]+[0-9]*$/ )] )
      } )
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray( [] );

    if ( this.editMode ) {
      const recipe = this.recipeService.getRecipe( this.id );
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if ( recipe['ingredients'] ) {
        if ( recipe['ingredients'].length > 0 ) {
          for ( let ingredient of recipe.ingredient ) {
            recipeIngredients.push(
              new FormGroup( {
                'amount': new FormControl( ingredient.amount, [Validators.required, Validators.pattern( /^[1-9]+[0-9]*$/ )] ),
                'name': new FormControl( ingredient.name, Validators.required )
              } )
            );
          }
        } else {
          recipeIngredients.push(
            new FormGroup( {
              'amount': new FormControl( 0 ),
              'name': new FormControl( 'no ingredients' )
            } )
          );
        }

      }

    }
    this.recipeForm = new FormGroup( {
      'name': new FormControl( recipeName, Validators.required ),
      'imagePath': new FormControl( recipeImagePath, Validators.required ),
      'description': new FormControl( recipeDescription, Validators.required ),
      'ingredient': recipeIngredients
    } );
  }

  onCancel() {
    this.router.navigate( ['../'], { relativeTo: this.route } );
  }

  onDeleteIngredient( index: number ) {
    ( <FormArray>this.recipeForm.get( 'ingredient' ) ).removeAt( index );
  }
}

import { AuthComponent } from './auth/auth.component';
import { RecipesResolverService } from './recipes/recipe-list/recipes-resolver.service';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { RecipesModule } from './recipes/recipes.module';


const appRoute: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        // loadChildren: './recipes/recipes.module#RecipesModule'
        loadChildren: () => import( './recipes/recipes.module' ).then( m => m.RecipesModule )
    },
    {
        path: 'shopping-list',
        loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }

];

@NgModule( {
    imports: [RouterModule.forRoot( appRoute, { preloadingStrategy: PreloadAllModules } ),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule]
} )
export class AppRoutingModule {

}

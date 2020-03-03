import { AuthComponent } from './auth/auth.component';
import { RecipesResolverService } from './recipes/recipe-list/recipes-resolver.service';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';


const appRoute: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: RecipeStartComponent
            },
            {
                path: 'new',
                component: RecipeEditComponent
            },
            {
                path: ':id',
                component: RecipeDetailsComponent,
                resolve: [RecipesResolverService]
            },
            {
                path: ':id/edit',
                component: RecipeEditComponent,
                resolve: [RecipesResolverService]
            }
        ]
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    }
];

@NgModule( {
    imports: [RouterModule.forRoot( appRoute ),
        FormsModule,
        ReactiveFormsModule],
    exports: [RouterModule]
} )
export class AppRoutingModule {

}

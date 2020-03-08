import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loadingSpinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule( {
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective
    ],
    imports: [CommonModule],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        CommonModule
    ]
} )
export class SharedModule { }

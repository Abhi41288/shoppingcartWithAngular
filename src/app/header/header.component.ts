import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';


@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html'
} )
export class HeaderComponent {
    collapsed: true;

    constructor( private dataStoreService: DataStorageService ) {

    }

    //@Output() featureSelect = new EventEmitter<string>();

    // onSelect( feature: string ) {
    //     this.featureSelect.emit( feature );
    // }

    onSaveData() {
        this.dataStoreService.storeRecipe();
    }

    onFetchData() {
        this.dataStoreService.fetchRecipe().subscribe();
    }
}

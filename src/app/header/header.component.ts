import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';


@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html'
} )
export class HeaderComponent implements OnInit {
    collapsed: true;
    private userSub: Subscription;
    isAuthenticated = false;

    constructor( private dataStoreService: DataStorageService, private authService: AuthService ) {

    }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe( user => {
            this.isAuthenticated = !user ? false : true;
        } );
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

    onLogout() {
        this.authService.logout();
    }

    OnDestroy() {
        this.userSub.unsubscribe();
    }
}

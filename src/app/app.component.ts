import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit {
  title = 'newCourceProject';
  loadedFeature = 'recipe';

  constructor( private authService: AuthService ) { }

  ngOnInit() {

    this.authService.autoLogin();
  }

}

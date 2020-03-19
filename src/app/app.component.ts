import { Component } from '@angular/core';

import './security/_content/app.less';
import { User } from './security/_models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './security/_services/authentication.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
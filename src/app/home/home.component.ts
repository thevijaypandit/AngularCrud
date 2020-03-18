import { Component, OnInit } from '@angular/core';
import { User } from '../security/_models/user';
import { AuthenticationService } from '../security/_services/authentication.service';
import { UserService } from '../security/_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];
  constructor(private _authenticationService: AuthenticationService, private _userService: UserService) {
    this.currentUser = this._authenticationService.getCurrentUser;

  }

  ngOnInit() {
    this.loadAllUsers();
  }
  deleteUser(id: number) {
    this._userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }
  private loadAllUsers() {
    this._userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }
}

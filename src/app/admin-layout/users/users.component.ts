import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    title = 'USERS';
    users = [];

    constructor(
        private usersService: UsersService
    ) {

    }

    private removeUser(data) {
        this.usersService.removeUser(data);
    }

    ngOnInit() {
        this.users = this.usersService.getUsers();
    }
}

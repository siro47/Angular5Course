import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    title = 'USERS';
    users = [];
    
    searchForm: FormGroup;

    constructor(
        private usersService: UsersService,
        private fb: FormBuilder
    ) {
        this.searchForm = this.fb.group({
            search: ['']
        })
    }

    private removeUser(data) {
        this.usersService.removeUser(data);
    }

    ngOnInit() {
        this.users = this.usersService.getUsers('');

        this.searchForm.valueChanges
            .subscribe(value => {
                this.users = this.usersService.getUsers(value.search);
            })
    }
}

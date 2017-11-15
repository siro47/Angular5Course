import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/debounce"
import "rxjs/add/operator/map"
import "rxjs/add/operator/do"

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
            .map(item => item.search)
            .map(item => item.charAt(0).toUpperCase() + item.slice(1))
            .do(item => console.log(item))
            .debounce(() => Observable.timer(700))
            .subscribe(value => {
                this.users = this.usersService.getUsers(value);
            })
    }
}

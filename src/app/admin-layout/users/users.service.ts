import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";

export class User {
    id: string;
    username: string;
    description: string;
    image: string;

    constructor(id: string, name: string, desc:string, image:string) {
        this.id = id;
        this.username = name;
        this.description = desc;
        this.image = image;
    }
}

@Injectable()
export class UsersService {

    USERS_URL = 'http://localhost:3000/users';
    USER_URL = 'http://localhost:3000/user';

    users = [
        new User("1", "Bart Simpson", "Always up to no good", "./assets/images/bart-simpson.png"),
        new User("2", "Lisa Simpson", "The best of his class", "./assets/images/lisa-simpson.png"),
        new User("3", "Homer Simpson", "D'oh!", "./assets/images/homer-simpson.png"),
        new User("4", "Marge Simpson", "Great wife", "./assets/images/marge-simpson.png"),
        new User("5", "Milhouse", "Nobody likes Milhouse!", "./assets/images/milhouse.jpeg"),
        new User("6", "Ppal. Skinner", "I love my mum", "./assets/images/skinner.png"),
    ]

  constructor(
      private http: HttpClient
  ) { }

    public addNewUser(user) {
        const headers = new HttpHeaders().set('Authorization', ' Bearer ' + localStorage.getItem('token'));
        
        var pass = Math.random().toString(36).substring(7);
        user.password = pass;
        return this.http.post(this.USER_URL, user, {headers: headers});
    }

    public removeUser(data) {
        var index = this.users.findIndex(user => {return user.id == data.id});
        this.users.splice(index, 1);
    }

    public getUser(id) {
        return this.users.find(user => {return user.id == id});
    }

    public getUsers(filter) {
        return this.http.get(this.USERS_URL);
    }

}

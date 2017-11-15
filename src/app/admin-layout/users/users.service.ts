import { Injectable } from '@angular/core';

export class User {
    id: string;
    name: string;
    desc: string;
    image: string;

    constructor(id: string, name: string, desc:string, image:string) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.image = image;
    }
}

@Injectable()
export class UsersService {

    users = [
        new User("1", "Bart Simpson", "Always up to no good", "./assets/images/bart-simpson.png"),
        new User("2", "Lisa Simpson", "The best of his class", "./assets/images/lisa-simpson.png"),
        new User("3", "Homer Simpson", "D'oh!", "./assets/images/homer-simpson.png"),
        new User("4", "Marge Simpson", "Great wife", "./assets/images/marge-simpson.png"),
        new User("5", "Milhouse", "Nobody likes Milhouse!", "./assets/images/milhouse.jpeg"),
        new User("6", "Ppal. Skinner", "I love my mum", "./assets/images/skinner.png"),
    ]

  constructor() { }

    public addNewUser(user) {
        this.users.push(user);
    }

    public removeUser(data) {
        var index = this.users.findIndex(user => {return user.id == data.id});
        this.users.splice(index, 1);
    }

    public getUser(id) {
        return this.users.find(user => {return user.id == id});
    }

    public getUsers() {
        return this.users;
    }

}

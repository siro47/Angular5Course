import { Component } from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USERS';

    users = [
        new User("1", "Bart Simpson", "Always up to no good", "./assets/images/bart-simpson.png"),
        new User("2", "Lisa Simpson", "The best of his class", "./assets/images/lisa-simpson.png"),
        new User("3", "Homer Simpson", "D'oh!", "./assets/images/homer-simpson.png"),
        new User("4", "Marge Simpson", "Great wife", "./assets/images/marge-simpson.png"),
        new User("5", "Milhouse", "Nobody likes Milhouse!", "./assets/images/milhouse.jpeg"),
        new User("6", "Ppal. Skinner", "I love my mum", "./assets/images/skinner.png"),
    ]

    public addNewUser() {
        this.users.push(new User("7", "Moe", "Prettiest bartender ever", "./assets/images/moe.png"));
    }
}

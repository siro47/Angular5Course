import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {User, UsersService} from "../users.service";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

    private id: Number;
    private data: User;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private usersService: UsersService
  ) { }

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
            .subscribe(params => {
                this.id = +params['id'];
                this.data = this.usersService.getUser(this.id);
            })

    }

}

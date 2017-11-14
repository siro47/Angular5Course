import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

    private id: Number;

    constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
            .subscribe(params => {this.id = +params['id']})

        this.route.data
            .subscribe(data => console.log(data))
    }

}

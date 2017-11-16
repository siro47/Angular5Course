import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {User, UsersService} from "../users.service";

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

    public myForm: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.myForm = this.fb.group({
            name: this.fb.group({
                firstName: ['', [<any>Validators.required]],
                lastName: ['', [<any>Validators.required]],
            }),
            desc: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
        });
    }

    save(value, isValid) {
        if (isValid) {
            var newUser = new User ( new Date().getTime().toString(), value.name.firstName + ' ' + value.name.lastName, value.desc, '');
            this.usersService.addNewUser(newUser)
                .subscribe(response => {
                    this.router.navigate(['..'], {relativeTo: this.route});
                })
        }
    }

}

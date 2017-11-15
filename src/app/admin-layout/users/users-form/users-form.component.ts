import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

    public myForm: FormGroup;

    constructor(
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

    }

}

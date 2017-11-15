import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

    public myForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormControl('', [<any>Validators.required]),
            desc: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
        });
    }

    save(value, isValid) {

    }

}

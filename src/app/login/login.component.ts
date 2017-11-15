import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LOGIN_URL = 'http://localhost:3000/login';

  constructor(
      private router: Router,
      private http: HttpClient
  ) { }

  ngOnInit() {
  }

    checkForm(form) {
        this.http.post(this.LOGIN_URL, form.value)
            .subscribe(response => {
                if (response['userToken']) {
                    localStorage.setItem('token', response['userToken']);
                    this.router.navigate(['/admin']);
                }
            },
            error => {
                alert(error.message)
            })
    }

}

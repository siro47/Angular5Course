import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

    checkForm(form) {
        if (form.value.username === 'admin' && form.value.password === '12345' ) {
            this.router.navigate(['/admin']);
        } else {
            alert('wrong user/pass')
        }
    }

}

// Core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// Services
import { UserService } from '../services/service.index';
// Model
import { User } from '../models/user.model';
// Config
import { ID_CLIENT } from '../config/config';

declare function init_plugin();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rememberme: boolean = false;
  email: string;
  auth2: any;

  constructor(
    public _router: Router,
    public _userService: UserService
  ) {}

  ngOnInit() {
    init_plugin();

    this.googleInit();

    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 0) {
      this.rememberme = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: ID_CLIENT,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin( document.getElementById('btnGoogle') );
    });
  }

  attachSignin( element ) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      console.log(googleUser.getBasicProfile());
    });
  }

  login(form: NgForm) {

    if (form.invalid) {
      return;
    }

    const USER = new User(
      null,
      form.value.email,
      form.value.password
    );

    this._userService.login(USER, form.value.rememberme)
      .subscribe(user => {
        this._router.navigate(['/dashboard']);
      });
  }
}

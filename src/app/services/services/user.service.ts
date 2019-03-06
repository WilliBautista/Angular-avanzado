// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// Models
import { User } from 'src/app/models/user.model';
// Config
import { LINK_SERVICE } from '../../config/config';
// RxJS
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;

  constructor(
    public http: HttpClient,
    public _router: Router
  ) {
    this.verifyStorageData();
  }

  verifyStorageData() {
    if (localStorage.getItem('token')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.token = localStorage.getItem('token');
      return true;
    } else {
      this.user = null;
      this.token = '';
      return false;
    }
  }

  saveStorage( id: string, token: string, user: User ) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  logout() {
    this.token = '';
    this.user = null;
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this._router.navigate(['/login']);
  }

  createUser(user: User) {
    const URL = LINK_SERVICE + '/user';

    return this.http.post(URL, user)
      .pipe(
        map((resp: any) => {
          swal('Listo!', `El usuario ${ user.email } ha sido creado`, 'success');
          return resp.user;
        })
      );
  }

  login(user: User, rememberme: boolean = false) {
    const URL = LINK_SERVICE + '/login';

    if (rememberme) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post(URL, user)
      .pipe(
        map((resp: any) => {
          this.saveStorage(resp.id, resp.token, resp.userDB);
          return resp.userDB;
        })
      );
  }
}

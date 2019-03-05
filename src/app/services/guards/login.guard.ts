import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public _userService: UserService,
    public _router: Router
  ) {}

  canActivate() {
    if (this._userService.verifyStorageData()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}

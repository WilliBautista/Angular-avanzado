// Core
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Servicios
import { UserService } from '../services/service.index';
// Models
import { User } from '../models/user.model';
// Other
import swal from 'sweetalert';

declare function init_plugin();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  validatePassword(form: FormGroup) {

    if (form.get('password').value === form.get('password2').value) {
      return null;
    }

    return { 'passMatch': true };
  }

  ngOnInit() {
    init_plugin();

    this.forma = new FormGroup({
      name: new FormControl( null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      conditions: new FormControl( false )
    }, { validators: this.validatePassword });

    this.forma.setValue({
      name: 'test',
      email: 'test@test.com',
      password: '123456',
      password2: '123456',
      conditions: true
    });
  }

  registerUser() {

    if (!this.forma.value.conditions) {
      swal('Oops!', 'No ha aceptado los terminos y condiciones', 'warning');
      return;
    }

    if (this.forma.invalid) {
      return;
    }

    const USER = new User(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.password
    );

    this._userService.createUser(USER)
      .subscribe(user => {
        this.router.navigate(['/login']);
      });
  }
}

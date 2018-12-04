import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare function init_plugin();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor() { }

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

    if (this.forma.valid) {
      return;
    }

    if (this.forma.value.conditions) {
      console.log('Debe aceptar los terminos y condiciones');
      return;
    }

    console.log(this.forma);
  }

}

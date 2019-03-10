import { Component, OnInit } from '@angular/core';
// Model
import { User } from '../../models/user.model';
// Components
import { UserService } from '../../services/service.index';
import swal from 'sweetalert';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;
  fileImage: File;
  previewImage: any;

  constructor( public _userService: UserService ) {
    this.user = this._userService.user;
  }

  ngOnInit() {
  }

  updateUser(user: User) {
    this.user.name = user.name;

    if (!this.user.google) {
      this.user.email = user.email;
    }

    this._userService.updateUser(this.user)
      .subscribe();
  }

  selectImage( file: File ) {

    if ( !file ) {
      this.fileImage = null;
      return;
    }

    if (file.type.indexOf('image') < 0) {
      swal('Oops!', `Archivo no permitido.`, 'error');
      this.previewImage = null;
      return;
    }

    const READER = new FileReader();

    READER.readAsDataURL(file);
    READER.onloadend = () => this.previewImage = READER.result;

    this.fileImage = file;
  }

  uploadImage() {
    this._userService.updateImage(this.fileImage, this.user._id);
  }

}

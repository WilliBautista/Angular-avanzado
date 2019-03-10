import { Component, OnInit } from '@angular/core';
// Model
import { User } from '../../models/user.model';
// Components
import { UserService } from '../../services/service.index';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;
  fileImage: File;

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

    this.fileImage = file;
  }

  uploadImage() {
    this._userService.updateImage(this.fileImage, this.user._id);
  }

}

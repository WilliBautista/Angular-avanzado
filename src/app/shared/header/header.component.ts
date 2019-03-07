import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';
import { log } from 'util';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor( public _userService: UserService ) {
    this.user = _userService.user;
  }

  ngOnInit() {}

}

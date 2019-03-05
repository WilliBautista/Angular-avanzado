import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';
import { log } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _userService: UserService
  ) {
    console.log(this._userService);
  }

  ngOnInit() {
  }

}

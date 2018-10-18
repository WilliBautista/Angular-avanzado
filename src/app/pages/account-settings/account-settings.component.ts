import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ) {}

  ngOnInit() {
    if (sessionStorage.getItem('theme_color') !== null) {
      const COLOR = sessionStorage.getItem('theme_color'),
        ELEMENT = this._document.getElementsByClassName(COLOR + '-theme')[0];
      this.changeColor(COLOR, ELEMENT);
    }
  }

  changeColor( theme: string, link: any ) {
    const URL = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme_css').setAttribute('href', URL);
    this.putCheckColor(link);
    this.sessionStorage(theme);
  }

  putCheckColor( link: any ) {
    this._document.getElementsByClassName('working')[0].classList.remove('working');
    link.classList.add('working');
  }

  sessionStorage(color: string) {
    sessionStorage.setItem('theme_color', color);
  }
}

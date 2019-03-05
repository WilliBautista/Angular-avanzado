import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
// Services
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    public _settings: SettingsService
  ) {}

  ngOnInit() {
    this.putCheck();
  }

  changeColor( theme: string, link: any ) {
    this.changeCheck(link);
    this._settings.applyColorTheme( theme );
  }

  changeCheck( link: any ) {
    this._document.getElementsByClassName('working')[0].classList.remove('working');
    link.classList.add('working');
  }

  putCheck() {
    const theme = this._settings.settings.theme;
    const elements = this._document.getElementsByClassName('selector');

    for (const element of elements) {
      if ( element.getAttribute('data-theme') === theme ) {
        element.classList.add('working');
        break;
      }
    }
  }
}

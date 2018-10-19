import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.getLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('settings', JSON.stringify( this.settings ));
  }

  getLocalStorage() {
    if ( localStorage.getItem('settings') ) {
      this.settings = JSON.parse( localStorage.getItem('settings') );
      this.applyColorTheme( this.settings.theme );
    } else {
      this.applyColorTheme( this.settings.theme );
    }
  }

  applyColorTheme(theme: string) {
    const URL = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme_css').setAttribute('href', URL);

    this.settings.themeUrl = URL;
    this.settings.theme = theme;

    this.setLocalStorage();
  }
}

interface Settings {
  themeUrl: string;
  theme: string;
}

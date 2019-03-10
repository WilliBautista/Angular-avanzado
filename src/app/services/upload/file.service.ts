import { Injectable } from '@angular/core';
import { LINK_SERVICE } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() {}

  uploadImage(file: File, type: string, id: string) {

    return new Promise((resolve, reject) => {
      const FORM_DATA = new FormData(),
          XHR = new XMLHttpRequest(),
          URL = `${LINK_SERVICE}/upload/${type}/${id}`;

      FORM_DATA.append('image', file, file.name);

      XHR.onreadystatechange = () => {
        if (XHR.readyState === 4) {
          if (XHR.status === 200) {
            resolve( JSON.parse(XHR.response) );
          } else {
            reject( XHR.response );
          }
        }
      };

      XHR.open('PUT', URL, true);
      XHR.send( FORM_DATA );

    });
  }
}

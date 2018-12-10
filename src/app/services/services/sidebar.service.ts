import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: Menu[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'dashboard', url: '/dashboard' },
        { title: 'progress', url: '/progress' },
        { title: 'graficas', url: '/graph1' },
        { title: 'Promesa', url: '/promesa' },
        { title: 'RxJs', url: '/rxjs' }
      ]
    }
  ];

  constructor( public http: HttpClient ) {
    this.testLInce();
  }

  testLInce() {
    const URL = 'https://admin:YRLUITYNUGOODSHD@portal-ssl449-28.bmix-dal-yp-e0947e69-236f-4b91-8c2e-901c169794d7.692276902.composedb.com:46944/normas/_search/',
    // const URL = 'https://portal-ssl449-28.bmix-dal-yp-e0947e69-236f-4b91-8c2e-901c169794d7.692276902.composedb.com:46944/normas/_search',
      HEADERS = {
        headers : new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };

    this.http.get(URL, HEADERS)
      .subscribe(res => {
        console.log(res);
      });
  }
}

interface Menu {
  title: string;
  icon: string;
  submenu: Submenu[];
}

interface Submenu {
  title: string;
  url: string;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: Menu[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'dashboard',
          url: '/dashboard'
        },
        {
          title: 'progress',
          url: '/progress'
        },
        {
          title: 'graficas',
          url: '/graph1'
        }
      ]
    }
  ];

  constructor() { }
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

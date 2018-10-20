// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graphs/graph1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
          description: 'Tú dashboard configurable',
          keywords: 'dashboard,cms,adminpro'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Barras de rogreso',
          description: 'Mide el progreso de tus cursos',
          keywords: 'progress,progreso'
        }
      },
      {
        path: 'graph1',
        component: Graph1Component,
        data: {
          title: 'Gráficas',
          description: 'Graficas para las metricas de tus avances',
          keywords: 'metricas,graficas,graphics'
        }
      },
      {
        path: 'promesa',
        component: PromesaComponent,
        data: {
          title: 'Promesas',
          description: 'En esta página se esta ejecutando una promesa',
          keywords: 'promises,promesas'
        }
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: {
          title: 'RxJs',
          description: 'En esta página se esta un observador',
          keywords: 'observers,observables'
        }
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {
          title: 'Ajustes de cuenta',
          description: 'Configura la interfaz de tu dashboard',
          keywords: 'settings,adminpro,account'
        }
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(PAGES_ROUTES) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }

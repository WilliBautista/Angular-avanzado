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
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graph1', component: Graph1Component },
      { path: 'promesa', component: PromesaComponent },
      { path: 'rxjs', component: RxjsComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(PAGES_ROUTES) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }

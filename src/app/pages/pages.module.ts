// Core
import { NgModule } from '@angular/core';
// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graphs/graph1.component';
import { PagesRoutingModule } from './pages-routing.module';
// Modules
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graph1Component
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

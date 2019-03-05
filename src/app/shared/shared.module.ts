// Core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// Pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PipesModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PagenotfoundComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PagenotfoundComponent
  ]
})
export class SharedModule { }

// Core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PagenotfoundComponent
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PagenotfoundComponent
  ]
})
export class SharedModule { }

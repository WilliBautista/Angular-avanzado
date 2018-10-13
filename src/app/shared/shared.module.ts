import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
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

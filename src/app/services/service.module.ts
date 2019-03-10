// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Services
import {
  SettingsService,
  SidebarService,
  UserService,
  LoginGuard,
  FileService
} from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuard,
    SettingsService,
    SidebarService,
    UserService,
    FileService
  ]
})
export class ServiceModule { }

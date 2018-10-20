import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    FormsModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

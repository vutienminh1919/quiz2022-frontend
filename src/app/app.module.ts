import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {CategoryModule} from "./components/category/category.module";

import {RegisterComponent} from "./components/auth/register/register.component";

import {LoginComponent} from "./components/auth/login/login.component";
import { TestListComponent } from './components/test/test-list/test-list.component';
import { TestCreateComponent } from './components/test/test-create/test-create.component';
import { TestEditComponent } from './components/test/test-edit/test-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CategoryModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

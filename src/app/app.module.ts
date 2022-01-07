import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {CategoryModule} from "./components/category/category.module";

import {RegisterComponent} from "./components/auth/register/register.component";

import {LoginComponent} from "./components/auth/login/login.component";
import { MasterComponent } from './components/frontend/master/master.component';
import { HomeComponent } from './components/frontend/layout/home/home.component';
import { FooterComponent } from './components/frontend/layout/core/footer/footer.component';
import { NavbarComponent } from './components/frontend/layout/core/navbar/navbar.component';
import { HeaderComponent } from './components/frontend/layout/core/header/header.component';

import {AnswerModule} from "./components/answer/answer.module";
import {QuestionModule} from "./components/question/question.module";




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MasterComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CategoryModule,
    AnswerModule,
    QuestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

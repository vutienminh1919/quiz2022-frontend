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
import { FooterComponent } from './components/frontend/layout/admin/core/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './components/frontend/layout/admin/core/header/header.component';

import {AnswerModule} from "./components/answer/answer.module";
import {QuestionModule} from "./components/question/question.module";
import { AdminComponent } from './components/frontend/layout/admin/admin.component';

import { QuizComponent } from './components/frontend/layout/home/quiz/quiz.component';
import { TopicComponent } from './components/frontend/layout/home/topic/topic.component';
import { ResultComponent } from './components/frontend/layout/home/result/result.component';
import { NavbarHomeComponent } from './components/frontend/layout/home/navbar-home/navbar-home.component';
import { LayoutComponent } from './components/main/layout/layout.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {NgxPaginationModule} from 'ngx-pagination';




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
    AdminComponent,
    QuizComponent,
    TopicComponent,
    ResultComponent,
    NavbarHomeComponent,
    UserListComponent

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CategoryModule,
    AnswerModule,
    QuestionModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}

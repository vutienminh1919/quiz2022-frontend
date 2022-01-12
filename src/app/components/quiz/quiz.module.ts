import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import {QuizCreateComponent} from "./quiz-create/quiz-create.component";
import {ReactiveFormsModule} from "@angular/forms";
import { QuizEditComponent } from './quiz-edit/quiz-edit.component';


@NgModule({
  declarations: [
    QuizListComponent,
    QuizCreateComponent,
    QuizDetailComponent,
    QuizEditComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }

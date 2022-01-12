import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import {QuizCreateComponent} from "./quiz-create/quiz-create.component";
import {ReactiveFormsModule} from "@angular/forms";
import { QuizEditComponent } from './quiz-edit/quiz-edit.component';
import {NgxPaginationModule} from "ngx-pagination";
import { QuizManagerComponent } from './quiz-manager/quiz-manager.component';


@NgModule({
  declarations: [
    QuizListComponent,
    QuizCreateComponent,
    QuizDetailComponent,
    QuizEditComponent,
    QuizManagerComponent
  ],
    imports: [
        CommonModule,
        QuizRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class QuizModule { }

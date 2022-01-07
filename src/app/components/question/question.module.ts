import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    QuestionListComponent,
    QuestionCreateComponent,
    QuestionEditComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QuestionModule { }

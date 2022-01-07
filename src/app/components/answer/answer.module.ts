import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswerRoutingModule } from './answer-routing.module';
import {AnswerListComponent} from "./answer-list/answer-list.component";
import {AnswerCreateComponent} from "./answer-create/answer-create.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AnswerEditComponent } from './answer-edit/answer-edit.component';


@NgModule({
  declarations: [
    AnswerListComponent,
    AnswerEditComponent,
    AnswerCreateComponent
  ],
  imports: [
    CommonModule,
    AnswerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AnswerModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionListComponent} from "./question-list/question-list.component";
import {QuestionCreateComponent} from "./question-create/question-create.component";
import {QuestionEditComponent} from "./question-edit/question-edit.component";

const routes: Routes = [
  {
    path: '',
    component: QuestionListComponent
  },
  {
    path: 'create',
    component: QuestionCreateComponent,
  },
  {
    path: 'edit/:id',
    component: QuestionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }

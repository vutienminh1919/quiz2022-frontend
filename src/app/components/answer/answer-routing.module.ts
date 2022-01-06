import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnswerListComponent} from "./answer-list/answer-list.component";
import {AnswerCreateComponent} from "./answer-create/answer-create.component";
import {AnswerEditComponent} from "./answer-edit/answer-edit.component";

const routes: Routes = [
  {
    path: 'list',
    component: AnswerListComponent
  },
  {
    path: 'create',
    component: AnswerCreateComponent
  },
  {
    path: 'update/:id',
    component: AnswerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }

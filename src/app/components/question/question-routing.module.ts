import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionListComponent} from "./question-list/question-list.component";
import {QuestionCreateComponent} from "./question-create/question-create.component";
import {QuestionEditComponent} from "./question-edit/question-edit.component";
import {QuestionDetailComponent} from "./question-detail/question-detail.component";

const routes: Routes = [
  {
    path: 'list',
    component: QuestionListComponent
  },
  {
    path: 'create',
    component: QuestionCreateComponent,
  },
  {
    path: 'edit/:id',
    component: QuestionEditComponent
  },
  {
    path: 'detail/:id',
    component: QuestionDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }

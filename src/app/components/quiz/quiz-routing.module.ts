import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {QuizCreateComponent} from "./quiz-create/quiz-create.component";
import {QuizDetailComponent} from "./quiz-detail/quiz-detail.component";
import {QuizEditComponent} from "./quiz-edit/quiz-edit.component";
import {QuizManagerComponent} from "./quiz-manager/quiz-manager.component";

const routes: Routes = [
  {
    path: '',
    component: QuizListComponent
  },
  {
    path: 'create',
    component: QuizCreateComponent
  },
  {
    path: 'detail/:id',
    component: QuizDetailComponent
  },
  {
    path: 'edit/:id',
    component: QuizEditComponent
  },
  {
    path: ':id/manager',
    component: QuizManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }

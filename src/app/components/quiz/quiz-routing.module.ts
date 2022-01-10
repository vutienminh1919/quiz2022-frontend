import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {QuizCreateComponent} from "./quiz-create/quiz-create.component";

const routes: Routes = [
  {
    path: 'list',
    component: QuizListComponent
  },
  {
    path: 'create',
    component: QuizCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }

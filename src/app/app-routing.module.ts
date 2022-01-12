import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {HomeComponent} from "./components/frontend/layout/home/home.component";
import {MasterComponent} from "./components/frontend/master/master.component";
import {AdminComponent} from "./components/frontend/layout/admin/admin.component";
import {QuizComponent} from "./components/frontend/layout/home/quiz/quiz.component";
import {ResultComponent} from "./components/frontend/layout/home/result/result.component";
import {TopicComponent} from "./components/frontend/layout/home/topic/topic.component";
import {LayoutComponent} from "./components/main/layout/layout.component";
import {QuestionListComponent} from "./components/question/question-list/question-list.component";
import {UserListComponent} from "./components/user/user-list/user-list.component";


const routes: Routes = [
  {
    path: '',
    component: MasterComponent
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'topic',
    component: TopicComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },


  {
    path: 'test',
    loadChildren: ()=> import('../app/components/test/test.module').then(module=>module.TestModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('../app/components/question/question.module').then(module => module.QuestionModule)
  },
  {
    path: 'answers',
    loadChildren: () => import('../app/components/answer/answer.module').then(module => module.AnswerModule)
  }];
  {
    path: 'answers',
    loadChildren: () => import('../app/components/answer/answer.module').then(module => module.AnswerModule)
  },

  {

    path: 'tests',
    loadChildren: () => import('../app/components/test/test.module').then(module => module.TestModule)
  },

  // {
  //   path: 'questions',
  //   loadChildren: () => import('../app/components/question/question.module').then(module => module.QuestionModule)
  // },
  // {
  //   path: 'answers',
  //   loadChildren: () => import('../app/components/answer/answer.module').then(module => module.AnswerModule)
  // },
  // {
  //   path: 'categories',
  //   loadChildren: () => import('../app/components/category/category.module').then(module => module.CategoryModule)
  // },
  {
// <<<<<<< xanh
//     path: 'questions',
//     loadChildren: () => import('../app/components/question/question.module').then(module => module.QuestionModule)
//   },
//   {
//     path: 'answers',
//     loadChildren: () => import('../app/components/answer/answer.module').then(module => module.AnswerModule)
//   },
//   {
//     path: 'categories',
//     loadChildren: () => import('../app/components/category/category.module').then(module => module.CategoryModule)
//   },
//   {
//     path: 'quizzes',
//     loadChildren: () => import('../app/components/quiz/quiz.module').then(module=> module.QuizModule)
//   }
//   ];
// =======
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'questions',
        loadChildren: () => import('../app/components/question/question.module').then(module => module.QuestionModule)
      },
      {
        path: 'answers',
        loadChildren: () => import('../app/components/answer/answer.module').then(module => module.AnswerModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../app/components/category/category.module').then(module => module.CategoryModule)
      },
      {
        path: 'quizzes',
        loadChildren: () => import('../app/components/quiz/quiz.module').then(module => module.QuizModule)
      },
      {
        path: 'users',
        component: UserListComponent
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

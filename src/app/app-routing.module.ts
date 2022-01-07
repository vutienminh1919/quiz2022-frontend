import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {HomeComponent} from "./components/frontend/layout/home/home.component";
import {MasterComponent} from "./components/frontend/master/master.component";



const routes: Routes = [
  {
    path: '',
    component: MasterComponent
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
    path: 'categories',
    loadChildren: () => import('../app/components/category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'test',
    loadChildren: ()=> import('../app/components/test/test.module').then(module=>module.TestModule)
  },
  {
    path: 'answers',
    loadChildren: () => import('../app/components/answer/answer.module').then(module => module.AnswerModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

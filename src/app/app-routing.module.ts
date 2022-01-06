import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";



const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

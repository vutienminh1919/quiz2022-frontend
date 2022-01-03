import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// @ts-ignore
const routes: Routes = [
  {
    path: 'category',
    loadChildren:()=>import('../app/components/category/category.module').then(module=>module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

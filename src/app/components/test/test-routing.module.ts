import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestListComponent} from "./test-list/test-list.component";

const routes: Routes = [
  {
    path: 'list',
    component: TestListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

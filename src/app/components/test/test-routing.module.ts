import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestListComponent} from "./test-list/test-list.component";
import {TestCreateComponent} from "./test-create/test-create.component";
import {TestEditComponent} from "./test-edit/test-edit.component";

const routes: Routes = [
  {
    path: 'list',
    component: TestListComponent
  },
  {
    path: 'create',
    component: TestCreateComponent
  },
  {
    path: 'update/:id',
    component: TestEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import {TestListComponent} from "./test-list/test-list.component";
import {TestCreateComponent} from "./test-create/test-create.component";
import {TestEditComponent} from "./test-edit/test-edit.component";


@NgModule({
  declarations: [
    TestListComponent,
    TestCreateComponent,
    TestEditComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,

  ]
})
export class TestModule { }

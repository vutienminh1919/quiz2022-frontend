import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    CategoryEditComponent,
    CategoryCreateComponent,
    CategoryListComponent
  ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class CategoryModule { }

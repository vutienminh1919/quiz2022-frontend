import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2SearchPipeModule} from "ng2-search-filter";



@NgModule({
  declarations: [
    QuestionListComponent,
    QuestionCreateComponent,
    QuestionEditComponent,
    QuestionDetailComponent
  ],
    imports: [
        CommonModule,
        QuestionRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,

    ]
})
export class QuestionModule { }

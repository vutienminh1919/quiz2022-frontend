import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../../../service/question/question.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  id: any
  question:any[] = []
  formEditQuestion?: FormGroup;

  constructor(private questionService:QuestionService,
              private fb:FormBuilder,
              private route:Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap :ParamMap) =>{
      this.id = paramMap.get('id');
      this.findById(this.id);
    })
  }

  ngOnInit(): void {
    this.formEditQuestion = this.fb.group({
      test_id: [''],
      question_name : [''],
      options: [''],
      correct: ['']
    });
  }

  editQuestion(id:any)
  {
    let data = this.formEditQuestion?.value;
    this.questionService.edit(id,data).subscribe( () =>{
    this.route.navigate([""]);
    })
  }

  findById(id:number)
  {
    this.questionService.findById(id).subscribe(res => {
      this.formEditQuestion = this.fb.group({
        test_id: [res.test_id],
        question_name: [res.question_name],
        options: [res.options],
        corect:[res.corect]
      });
    })
  }
}

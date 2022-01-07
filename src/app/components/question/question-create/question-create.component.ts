import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {QuestionService} from "../../../service/question/question.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {

  question : any[] = []

  formAddQuestion?: FormGroup;

  constructor(private fb:FormBuilder,
              private questionService: QuestionService,
              private route: Router) { }

  ngOnInit(): void {
    this.formAddQuestion = this.fb.group({
      test_id: [''],
      question_name: [''],
      options: [''],
      correct: [''],
    })
  }

  submit()
  {
    let data = this.formAddQuestion?.value;
    this.questionService.addQuestion(data).subscribe(question =>{
      this.question.unshift(data);
      this.route.navigate([""]);
    })
    this.formAddQuestion?.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../../service/question/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: any[] = []

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {

    this.getAll()
  }

  getAll()
  {
    this.questionService.getAll().subscribe(questions =>{
      this.questions = questions;
      console.log(this.questions);
    })
  }

  delete(i: any)
  {
    let question = this.questions[i];
    this.questionService.delete(question.id).subscribe(res =>{
      this.questions = this.questions.filter(
        q => q.id !== question.id
      )
    })
  }

}

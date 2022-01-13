import { Component, OnInit } from '@angular/core';
import {TopicService} from "../../../../../service/topic/topic.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  id:any
  listQuestions:any[] =[]

  constructor(private topicService: TopicService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  getQuestionByCategoryId(id:any)
  {
    this.topicService.listQuestionByCategoryId(id).subscribe(res =>{
      for (let i = 0; i<res.length;i++){
        this.listQuestions = res.questions
      }
    })
  }

}

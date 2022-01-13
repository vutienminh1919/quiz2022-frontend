import { Component, OnInit } from '@angular/core';
import {TopicService} from "../../../../../service/topic/topic.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  questions:any
  listQuiz:any[] = []

  constructor(private toppicService: TopicService) { }

  ngOnInit(): void {
    this.getAllQuiz()
  }

  getAllQuiz(){
    this.toppicService.getAll().subscribe(res =>{
      this.listQuiz = res
    })
  }

  getQuestionByQuizId(id:any)
  {

  }

}

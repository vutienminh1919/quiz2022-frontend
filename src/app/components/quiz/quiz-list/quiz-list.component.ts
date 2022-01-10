import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../service/quiz.service";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes: any[] = [];

  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.quizService.getAll().subscribe(quizzes => {
      this.quizzes = quizzes;
      console.log(this.quizzes);
    })
  }

}

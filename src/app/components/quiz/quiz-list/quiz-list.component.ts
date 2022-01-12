import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../service/quiz.service";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes: any[] = [];
  quiz: any;

  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.quizService.getAll().subscribe(quizzes => {
      this.quizzes = quizzes;
      // console.log(this.quizzes);
    })
  }
  show(id: any) {
    this.quizService.findById(id).subscribe(res => {
      this.quiz = res;
      console.log(this.quiz)
    })
  }

}

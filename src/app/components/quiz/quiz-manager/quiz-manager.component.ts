import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../service/quiz.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz-manager',
  templateUrl: './quiz-manager.component.html',
  styleUrls: ['./quiz-manager.component.css']
})
export class QuizManagerComponent implements OnInit {

  idQuiz?: any;
  quiz?: any;
  listQuiz?: any

  constructor(private quizService: QuizService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.idQuiz = parseInt(<string>this.router.snapshot.paramMap.get('id'));
    this.getQuestionOfQuiz(this.idQuiz);
    this.getListQuestionAdd(this.idQuiz);
  }

  getQuestionOfQuiz(idQuiz: any) {
    this.quizService.findById(this.idQuiz).subscribe(res => {
      console.log(res)
      this.quiz = res
    })
  }

  getListQuestionAdd(idQuiz: any) {
    this.quizService.getQuizNotOfQuiz(this.idQuiz).subscribe(res => {
      this.listQuiz = res;
    })
  }

  addQuestion(questionId: any) {
    let data = {
      question_id: questionId
    }
    this.quizService.addQuestion(this.idQuiz, data).subscribe(res => {
      this.getQuestionOfQuiz(this.idQuiz);
      this.getListQuestionAdd(this.idQuiz);
    })
  }


}

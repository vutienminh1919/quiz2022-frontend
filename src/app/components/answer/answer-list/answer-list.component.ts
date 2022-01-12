import {Component, OnInit} from '@angular/core';
import {AnswerService} from "../../../service/answer/answer.service";
import {CategoryService} from "../../../service/category.service";
import {QuestionService} from "../../../service/question/question.service";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  answers: any[] = [];
  questions: any[] = [];
  p: number  = 1;

  constructor(private answerService: AnswerService,
              private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.getAll();
    // this.getQuestion();
  }

  getAll() {
    this.answerService.getAll().subscribe(answers => {
      this.answers = answers;
      console.log(answers)

    });
  }

  delete(i: any) {
    const answer = this.answers[i];
    // @ts-ignore
    this.answerService.deleteAnswer(answer.id).subscribe(res => {
      this.answers = this.answers.filter(
        n => n.id !== answer.id
      )
    })

  }

  getQuestion() {
    this.questionService.getAll().subscribe(res => {
      console.log(res);
      this.questions = res;
    })
  }
}

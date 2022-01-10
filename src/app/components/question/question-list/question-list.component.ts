import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../../../service/question/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

// difficulty: any = '';

  questions: any[] = [];
  question: any;
  diff: any;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {

    this.getAll()

  }

  getAll() {
    this.questionService.getAll().subscribe(res => {
      this.questions = res;
      //@ts-ignore
      console.log(this.questions);
      // @ts-ignore
      for (let i = 0; i < res.length; i++) {
        console.log(this.questions[i]?.difficulty)
        this.diff = this.questions[i]?.difficulty
      }

      if (this.diff == 1) {
        this.diff = 'Dễ'
      } else if (this.diff == 2) {
        this.diff = 'Vừa'
      } else if (this.diff == 3) {
        this.diff = 'Khó'
      }

    })
  }

  show(id: any) {
    this.questionService.findById(id).subscribe(res => {
      this.question = res;
      console.log(this.question)
    })
  }

  delete(i: any) {
    let question = this.questions[i];
    // @ts-ignore
    this.questionService.delete(question.id).subscribe(res => {
      this.questions = this.questions.filter(
        q => q.id !== question.id
      )
    })
  }

}

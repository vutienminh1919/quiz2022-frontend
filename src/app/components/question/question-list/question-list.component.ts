import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../../../service/question/question.service";
import {AnswerService} from "../../../service/answer/answer.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

// difficulty: any = '';
  diffText: string = ''
  questions: any[] = [];
  question: any;
  diff: any[] = []

  constructor(private questionService: QuestionService,
              private answerService: AnswerService) {
  }

  ngOnInit(): void {

    this.getAll()

  }

  getAll() {
    this.questionService.getAll().subscribe(res => {
        this.questions = res;
        //@ts-ignore
        console.log(this.questions);
        // for (let i = 0; i < res.length; i++) {
        //   console.log(this.questions[i]?.difficulty)
        //   if (this.questions[i]?.difficulty == 1) {
        //     this.diffText = 'Dễ';
        //   } else if (this.questions[i]?.difficulty == 2 ) {
        //     this.diffText = 'Vừa';
        //   } else if (this.questions[i]?.difficulty == 3 ) {
        //     this.diffText = 'Khó';
        //   }
        //   this.diff.push(this.diffText)
        // }
        // console.log(this.diff)
      }
    )
  }

  show(id: any) {
    this.questionService.findById(id).subscribe(res => {
      this.question = res;
      console.log(this.question)
    })
  }

  delete(i: any
  ) {
    let question = this.questions[i];
    // @ts-ignore
    if (window.confirm('Bạn có chắc muốn xóa không ?')) {
      this.questionService.delete(question.id).subscribe(res => {
        this.questions = this.questions.filter(
          q => q.id !== question.id
        )
      })
    }
  }
  // createAnswer(){
  //
  // }
}

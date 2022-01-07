import { Component, OnInit } from '@angular/core';
import {AnswerService} from "../../../service/answer/answer.service";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
answers: any[] = [];
  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
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
}

import {Component, Input, OnInit} from '@angular/core';

import {FormGroup} from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import {Answer} from "../../../model/answer";
import {AnswerService} from "../../../service/answer/answer.service";

@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.css']
})
export class AnswerEditComponent implements OnInit {

  @Input() viewMode = false;
  // @ts-ignore
  @Input() currentAnswer : Answer = {
    option: '',
    // @ts-ignore
    question_id: '',
    correct: ''
  };
  message = '';
  answerForm: FormGroup = new FormGroup({});
  id: any;

  constructor(private answerService: AnswerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAnswer(this.activatedRoute.snapshot.params["id"]);
    }  }

  getAnswer(id: any): void {
    this.answerService.findById(id)
      .subscribe({
        next: (data) => {
          this.currentAnswer = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateAnswer(): void {
    this.message = '';

    this.answerService.updateAnswer(this.currentAnswer.id, this.currentAnswer)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message :alert( 'Sửa cau tra loi thành công!');
          this.router.navigate(['answers/list'])
        },
        error: (e) => console.error(e)
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {Router} from "@angular/router";
import {AnswerService} from "../../../service/answer/answer.service";

@Component({
  selector: 'app-answer-create',
  templateUrl: './answer-create.component.html',
  styleUrls: ['./answer-create.component.css']
})
export class AnswerCreateComponent implements OnInit {

  answerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    question_id: new FormControl(),
    correct: new FormControl()
  });

  constructor(private answerService: AnswerService,
              private route: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const answer = this.answerForm.value;
    this.answerService.saveAnswer(answer).subscribe(()=>{
      this.answerForm.reset();
      alert('Tạo thành công');
      this.route.navigate(["answers/list"])

    }, error => {
      console.log(error)
    })
  }

}

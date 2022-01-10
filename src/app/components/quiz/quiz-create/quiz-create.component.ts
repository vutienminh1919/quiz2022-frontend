import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {QuizService} from "../../../service/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {

  formAddQuiz: FormGroup = new FormGroup({
    name: new FormControl(),
    duration: new FormControl(),
    published: new FormControl()

  })

  constructor(private quizService: QuizService,
              private route: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const quiz = this.formAddQuiz.value;
    this.quizService.addQuiz(quiz).subscribe(() => {
      this.formAddQuiz.reset();
      alert('Tạo thành công');
      this.route.navigate(["quizzes/list"])
    } , error => {
      console.log(error)
    })
  }

}

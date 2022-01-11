import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {QuizService} from "../../../service/quiz.service";
import {Router} from "@angular/router";
import {QuestionService} from "../../../service/question/question.service";

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {

  questions: any[] = [];

  formAddQuiz: FormGroup = new FormGroup({
    name: new FormControl(),
    duration: new FormControl(),
    // published: new FormControl(),
    // questions: new FormArray([]),
    questions: new FormControl()
  })

  constructor(private quizService: QuizService,
              private questionService: QuestionService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  submit() {
    const quiz = this.formAddQuiz.value;
    console.log(quiz)
    this.quizService.addQuiz(quiz).subscribe(() => {
      this.formAddQuiz.reset();
      alert('Tạo thành công');
      this.route.navigate(["admin/quizzes/list"])
    }, error => {
      console.log(error)
    })
  }

  getQuestions() {
    this.questionService.getAll().subscribe(res => {
      console.log(res);
      this.questions = res;
    })
  }

  // @ts-ignore
  onCheckSubmit(event) {
    const formArray: FormArray = this.formAddQuiz.get('questions') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      // @ts-ignore
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {QuestionService} from "../../../service/question/question.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {
  answers: any[] = [];
  question: any[] = [];
  categories: any[] = [];
  formAddQuestion: FormGroup | any;
  formAddAnswer: FormGroup | any;

  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              private route: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.formAddQuestion = this.fb.group({
      question_content: [''],
      difficulty: [''],
      category: [''],
      answers: [this.answers]
    })
    this.formAddAnswer = this.fb.group({
      answer_content: [''],
      correct: ['']
    })
    this.getCategory();
  }

  submit() {

    let data = this.formAddQuestion?.value;
    console.log(data)
    // let data = this.question.push(this.answers)
    // console.log(data);
    this.questionService.addQuestion(data).subscribe(question => {
      this.question.unshift(data);
      // this.route.navigate(["/questions/list"]);
    })
    this.formAddQuestion?.reset();
  }

  getCategory() {
    this.categoryService.getAll().subscribe(res => {
      // console.log(res);
      this.categories = res;
    })
  }

  submitAnswer() {
    let answer = this.formAddAnswer?.value;
    // console.log(answer)
    this.answers.unshift(answer);
    console.log(this.answers)
    this.formAddAnswer?.reset();
  }

}

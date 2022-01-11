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
  a: any[] = []
  // b: any[] = []
  // c: any[] = []

  answers: any[] = [];
  answersResult: any[] = [];
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
      category_id: [''],
      answers: [this.a]
    })
    this.formAddAnswer = this.fb.group({
      answer_content: [''],
      correct: ['']
    })

    this.getCategory();
  }


  submit() {

    let data = this.formAddQuestion?.value;
    console.log("data ===> ", data)
    // let data = this.question.push(this.answers)
    // console.log(data);
    this.questionService.addQuestion(data).subscribe(() => {
      console.log('dau ham vao khong')
      // question.unshift(data);
      // console.log('question == ', question)
    })
    // this.formAddQuestion.answers = this.answersResult;
    // console.log('ket qua --> ', this.formAddQuestion.answers)
    alert('Tạo thành công ')
    this.formAddQuestion?.reset();

    this.route.navigate(["questions/list"]);

  }

  getCategory() {
    this.categoryService.getAll().subscribe(res => {
      // console.log(res);
      this.categories = res;
    })
  }

  submitAnswer() {
    let answer = this.formAddAnswer?.value;

    console.log('answer == ', answer)
    // console.log(answer)
    this.answers.unshift(answer);

    for (let i = 0; i < this.answers.length; i++) {
      // console.log('i = ', i)
      // console.log('chuyen == ', Object.values(this.answers[i]))
      this.answersResult.push(Object.values(this.answers[i]));
    }
    // // @ts-ignore
    // let a = this.answersResult.map(JSON.stringify);
    // // @ts-ignore
    // let b = new Set(a);
    // // @ts-ignore
    // this.answersResult = Array.from(b, JSON.parse);
    // @ts-ignore
    this.a = Array.from(new Set(this.answersResult.map(JSON.stringify)), JSON.parse);
    console.log('answerResult ==',this.a)
    this.formAddAnswer?.reset();
  }

}

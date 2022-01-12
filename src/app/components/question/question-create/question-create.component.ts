import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../../../service/question/question.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {
  ans: any[] = [];
  // b: any[] = []
  // c: any[] = []
  formAddQuestion = new FormGroup({
    question_content: new FormControl(''),
    difficulty: new FormControl(''),
    category_id: new FormControl(''),
  });
  formAddAnswer = new FormGroup({
    answer_content: new FormControl,
    correct: new FormControl
  });
  answers: any[] = [];
  answersResult: any[] = [];
  question: any[] = [];
  categories: any[] = [];

  // formAddAnswer: FormGroup | any;


  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              private route: Router,
              private categoryService: CategoryService) {
  }


  ngOnInit(): void {
    this.formAddQuestion = this.fb.group({
      question_content: ['', [Validators.required]],
      difficulty: ['', Validators.required],
      category_id: ['', Validators.required],
      // answers: [this.ans]
    })
    this.formAddAnswer = this.fb.group({
      answer_content: ['',Validators.required],
      correct: ['',Validators.required]
    })

    this.getCategory();
  }

  getCategory() {
    this.categoryService.getAll().subscribe(res => {
      // console.log(res);
      this.categories = res;
    })
  }

  submit() {
    let data = this.formAddQuestion?.value;
    this.questionService.addQuestion(data).subscribe(question => {
      console.log(1);
      this.question.unshift(data);
      this.route.navigate([""]);
    })
    this.formAddQuestion?.reset();
  }

  submitAnswer() {
    let answer = this.formAddAnswer?.value;
    this.answers.unshift(answer);
    for (let i = 0; i < this.answers.length; i++) {
      this.answersResult.push(Object.values(this.answers[i]));
    }
    // @ts-ignore
    this.ans = Array.from(new Set(this.answersResult.map(JSON.stringify)), JSON.parse);
    console.log('ans ==',this.ans)
    this.formAddAnswer?.reset();
  }

  get question_content() { return this.formAddQuestion.get('question_content'); }
  get difficulty(){return this.formAddQuestion.get('dificulty')}
  get category_id(){return this.formAddQuestion.get('category_id')}
  get answer_content(){return this.formAddAnswer.get('answer_content')}
  get correct(){return this.formAddAnswer.get('correct')}

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {QuestionService} from "../../../service/question/question.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {

  question: any[] = []
  categories: any[] = [];
  formAddQuestion?: FormGroup;

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
      answer: [''],

    })
    this.getCategory();
  }

  submit() {
    let data = this.formAddQuestion?.value;
    console.log(data);
    this.questionService.addQuestion(data).subscribe(question => {
      this.question.unshift(data);
      this.route.navigate(["/questions/list"]);
    })
    this.formAddQuestion?.reset();
  }

  getCategory() {
    this.categoryService.getAll().subscribe(res => {
      console.log(res);
      this.categories = res;
    })
  }

}

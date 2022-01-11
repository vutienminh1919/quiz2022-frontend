import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../../model/quiz";

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.css']
})
export class QuizEditComponent implements OnInit {

  @Input() viewMode = false
  @Input() currentQuiz: Quiz = {

  }

  constructor() { }

  ngOnInit(): void {
  }

}

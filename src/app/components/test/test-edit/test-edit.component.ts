import {Component, Input, OnInit} from '@angular/core';
import {Test} from "../../../model/test";
import {FormGroup} from "@angular/forms";
import {TestService} from "../../../service/test.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentTest: Test= {
    title: ''
  };
  message = '';
  testForm: FormGroup = new FormGroup({});
  id:any;
  constructor(private testService: TestService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTest(this.activatedRoute.snapshot.params["id"]);
    }
  }
  getTest(id: any): void {
    this.testService.findById(id)
      .subscribe({
        next: (data) => {
          this.currentTest = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateTest(): void {
    this.message = '';

    this.testService.updateTest(this.currentTest.id, this.currentTest)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message :alert( 'Sửa bài kiểm tra thành công!');
          this.router.navigate(['test/list'])
        },
        error: (e) => console.error(e)
      });
  }

}

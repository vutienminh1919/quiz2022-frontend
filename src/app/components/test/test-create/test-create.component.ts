import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TestService} from "../../../service/test.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {
  testForm: FormGroup= new FormGroup({
    title: new FormControl(),
  })

  constructor(private testService: TestService,
              private route: Router) { }

  ngOnInit(): void {
  }
  submit(){
    const test = this.testForm.value;
    this.testService.saveTest(test).subscribe(()=>
    {
      this.testForm.reset();
      alert('Tạo thành công');
      this.route.navigate(["test/list"])
    }, error => {
      console.log(error)
    })
  }

}

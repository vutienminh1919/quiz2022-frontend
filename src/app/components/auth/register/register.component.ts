import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "../../../services/auth/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup|any;
users: any[]= [];
  constructor(private registerService: RegisterService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    })
  }
  register() {
    let user = this.registerForm?.value;
    console.log(user);
    this.registerService.register(user).subscribe(user => {
      this.users.unshift(user)
    })
    this.registerForm?.reset();
    alert('tao thanh cong');
    this.router.navigate(['/login']);
  }

}

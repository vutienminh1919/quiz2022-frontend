import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup|any;
users: any[]= [];
  constructor(private registerService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      rePassword: ['', Validators.required]
    })
  }
  get name(){return this.registerForm.get('name')}
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}


  register() {
    let user = this.registerForm?.value;
    console.log(user);
    this.registerService.register(user).subscribe((user: any) => {
      this.users.unshift(user)
    })
    this.registerForm?.reset();
    // alert('tao thanh cong');
    this.router.navigate(['/auth/login']);
    this.toastr.success('Tạo tài khoản thành công ',':)')
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";

import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  data: any
  errors = null


  constructor(private loginService: AuthService,
              public fb: FormBuilder,
              public router: Router,
              private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]]
    })
  }
  get email() { return this.loginForm.get('email'); }
  get password(){return this.loginForm.get('password')}

  login() {
    this.data = this.loginForm.value
    // console.log(this.data)
    this.loginService.login(this.data).subscribe(data => {
      console.log(data, '12345')
      localStorage.setItem('token', data.access_token)
      localStorage.setItem('username', data.name)
      console.log(localStorage.getItem('token'));
      if (data.status_code === 500) {
        alert('sai ten dang nhap hoac mat khau')
        this.router.navigate(['/auth/login'])
      } else if (data.user == 'admin@gmail.com') {
        this.router.navigate(['/admin'])
        this.toastr.success(`Xin chào admin: ${data.name}`, 'Đăng nhập thành công')
      } else {
        this.router.navigate(['/home'])
        this.toastr.success(`Xin chào ${data.name}`, 'Đăng nhập thành công')
      }


    })


  }


}

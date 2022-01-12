import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  name: any = ' '


  constructor(private loginService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.name =  localStorage.getItem('username');
    console.log(this.name);
  }


  logout(){
    this.loginService.logout().subscribe(data => {
      console.log(data)
    })
    localStorage.removeItem('token');
    this.router.navigate(['auth/login'])
  }
}

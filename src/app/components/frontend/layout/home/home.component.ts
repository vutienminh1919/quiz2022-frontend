import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logout().subscribe(data => {
      console.log(data)
    })
    localStorage.removeItem('token');
    this.router.navigate(['auth/login'])
  }
}

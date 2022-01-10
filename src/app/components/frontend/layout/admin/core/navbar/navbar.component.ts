import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: any = ' '
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.name =  localStorage.getItem('username');
    console.log(this.name);
  }
  logout(){
    this.authService.logout().subscribe(data => {
      console.log(data)
    })
    localStorage.removeItem('token');
    this.router.navigate(['auth/login'])
  }

}

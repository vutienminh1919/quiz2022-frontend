import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.userService.getAll().subscribe(res => {
      this.users = res;
      console.log(this.users)
    });
  }
}

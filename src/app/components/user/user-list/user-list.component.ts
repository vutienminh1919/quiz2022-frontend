import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  p: number = 1;
  search: any;

  constructor(private userService: UserService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe(res => {
      this.users = res;
      console.log(this.users)
    });
  }

  // delete(i: any) {
  //   const user = this.users[i];
  //
  //   // @ts-ignore
  //   this.userService.delete(user.id).subscribe(res => {
  //     console.log(res)
  //     this.users = this.users.filter(
  //       n => n.id !== user.id
  //     )
  //   })
  //
  //
  //   this.toastr.success('Xóa thành công ', 'Thông báo')
  // }
}

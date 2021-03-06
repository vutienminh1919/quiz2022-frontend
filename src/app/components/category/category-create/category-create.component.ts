import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup= new FormGroup({
    category_name: new FormControl(),
    category_description: new FormControl(),
  });

  constructor(private categoryService: CategoryService,
              private route: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category).subscribe(()=>{
      this.categoryForm.reset();
      // alert('Tạo thành công');
      this.route.navigate(["admin/categories/list"])
      this.toastr.success('Thêm mới thành công', 'Thông báo ')


    }, error => {
      console.log(error)
    })
  }
  get category_name(){return this.categoryForm.get('category_name')}
  get category_description(){return this.categoryForm.get('category_description')}

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";

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
              private route: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category).subscribe(()=>{
      this.categoryForm.reset();
      alert('Tạo thành công');
      this.route.navigate(["admin/categories/list"])

    }, error => {
      console.log(error)
    })
  }

}

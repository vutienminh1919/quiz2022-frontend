import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentCategory : Category = {
    category_name: '',
    category_description: ''
  };
  message = '';
  categoryForm: FormGroup = new FormGroup({});
  id: any;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCategory(this.activatedRoute.snapshot.params["id"]);
    }  }

  getCategory(id: any): void {
    this.categoryService.findById(id)
      .subscribe({
        next: (data) => {
          this.currentCategory = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCategory(): void {
    this.message = '';

    this.categoryService.updateCategory(this.currentCategory.id, this.currentCategory)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message :alert( 'Sửa danh mục câu hỏi thành công!');
          this.router.navigate(['categories/list'])
        },
        error: (e) => console.error(e)
      });
  }
}

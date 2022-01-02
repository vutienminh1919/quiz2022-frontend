import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[]= [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  delete(i: any) {
    const category = this.categories[i];
    // @ts-ignore
    this.categoryService.deleteCategory(category.id).subscribe(res => {
      this.categories = this.categories.filter(
        n => n.id !== category.id
      )
    })

  }
}

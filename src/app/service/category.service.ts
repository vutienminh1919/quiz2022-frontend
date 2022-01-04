import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {environment} from "../../environments/environment";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }

  saveCategory(category: any): Observable<any> {
    return this.http.post(API_URL + '/categories', category);
  }

  findById(id: number):Observable<Category>{
    return this.http.get(`${API_URL}/categories/${id}`);
  }

  updateCategory(id: any, category: any): Observable<any>{
    return this.http.put(`${API_URL}/categories/${id}`, category);
  }

  deleteCategory(id: number):Observable<Category>{
    return this.http.delete<Category>(`${API_URL}/categories/${id}`);
  }
}

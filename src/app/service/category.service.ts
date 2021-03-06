import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`
// // @ts-ignore
// const header = localStorage.getItem('token');
// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'Authorization': `Bearer ${localStorage.getItem('token')}`
// })
//{headers:{'Authorization': `Bearer ${localStorage.getItem('token')} `}}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories', {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}});
  }

  saveCategory(category: any): Observable<any> {
    return this.http.post(API_URL + '/categories', category, {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}} );
  }

  findById(id: number): Observable<Category> {
    return this.http.get(`${API_URL}/categories/${id}`,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}} );
  }

  updateCategory(id: any, category: any): Observable<any> {
    return this.http.put(`${API_URL}/categories/${id}`, category,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}} );
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/categories/${id}`,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}});
  }
}

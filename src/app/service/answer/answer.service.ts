import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../model/category";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(API_URL + '/answers', {headers:{'Authorization': `Bearer ${localStorage.getItem('token')} `}});
  }
  saveAnswer(answer: any): Observable<any>{
    return this.http.post<any>(API_URL + '/answers', answer)
  }
  updateAnswer(id: any, answer: any): Observable<any> {
    return this.http.put(`${API_URL}/answers/${id}`, answer);
  }

  deleteAnswer(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/answers/${id}`);
  }


}


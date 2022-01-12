import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(environment.apiUrl+ '/quizzes')
  }
  addQuiz(data: any): Observable<any>{
    return this.http.post<any>(environment.apiUrl+ '/quizzes', data)
  }
  findById(id: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/quizzes/${id}`)
  }
  updateQuiz(id: any, quiz: any): Observable<any> {
    return this.http.put(`${API_URL}/quizzes/${id}`, quiz );
  }
}

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
    return this.http.get<any>(environment.apiUrl+ '/quizzes', {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }
  addQuiz(data: any): Observable<any>{
    return this.http.post<any>(environment.apiUrl+ '/quizzes', data, {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }
  findById(id: number): Observable<any> {
    return this.http.get<any>(`${API_URL}/quizzes/${id}`, {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }
  updateQuiz(id: any, quiz: any): Observable<any> {
    return this.http.put(`${API_URL}/quizzes/${id}`, quiz, {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}});
  }

  getQuizNotOfQuiz(id: any) {
    return this.http.get<any>(`${API_URL}/quizzes/${id}/question-not-quiz`, {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  addQuestion(id: any, data: any) {
    return this.http.post<any>(`${API_URL}/quizzes/${id}/add-questions`, data, {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})

  }
  deleteQuestion(id: any){
    return this.http.delete<any>(`${API_URL}/quizzes/${id}/delete-questions`, {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

}

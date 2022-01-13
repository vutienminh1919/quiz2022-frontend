import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  listCategory():Observable<any>
  {
    return this.http.get<any>(`${API_URL}/quizzes/questions`,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  listQuestionByCategoryId(id:any):Observable<any>
  {
    return this.http.get(`${API_URL}/quizzes/questions-answers/${id}`,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }
}

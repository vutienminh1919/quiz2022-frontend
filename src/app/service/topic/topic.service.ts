import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`


@Injectable({
  providedIn: 'root'
})
export class TopicService {



  constructor(private htth: HttpClient) { }

  getAll() : Observable<any>
  {
    return this.htth.get(API_URL + '/quizzes/questions', {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }
  // doQuiz(id:any) :Observable<any>
  // {
  //   return this.htth.post(API_URL + '/test',{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  // }
}

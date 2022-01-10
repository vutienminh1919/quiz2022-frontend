import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getAll() :Observable<any>{
    return this.http.get<any>(environment.apiUrl + '/questions');

  }

  addQuestion(data:any) : Observable<any>{
    return this.http.post<any>(environment.apiUrl + '/questions', data)

  }

  delete(id:number):Observable<any> {
    // return this.http.delete(environment.apiUrl + '/' +id);
    return this.http.delete<any>(`${environment.apiUrl}/questions/${id}`);

  }
  edit(id:number,data :any) :Observable<any> {

    return this.http.put(`${environment.apiUrl}/questions/${id}`, data);

  }
  findById(id:number):Observable<any> {
    // return this.http.get(environment.apiUrl + '/' +id);
    return this.http.get(`${environment.apiUrl}/questions/${id}` );

    // return this.http.get(environment.apiUrl + '/questions');
  }

  // addQuestion(data:any) : Observable<any>{
  //   return this.http.post(environment.apiUrl +'/questions',data);
  // }
  //
  // delete(id:number):Observable<any> {
  //   return this.http.delete(environment.apiUrl + '/questions' +id);
  // }
  // edit(id:number,data :any) :Observable<any> {
  //   return this.http.put(
  //     environment.apiUrl + '/questions' +id, data
  //   );
  // }
  // findById(id:number):Observable<any> {
  //   return this.http.get(environment.apiUrl + '/questions' +id);
  // }
}

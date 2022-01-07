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
    return this.http.get(environment.apiUrl + '');
  }

  addQuestion(data:any) : Observable<any>{
    return this.http.post(environment.apiUrl,data);
  }

  delete(id:number):Observable<any> {
    return this.http.delete(environment.apiUrl + '/' +id);
  }
  edit(id:number,data :any) :Observable<any> {
    return this.http.put(
      environment.apiUrl + '/' +id, data
    );
  }
  findById(id:number):Observable<any> {
    return this.http.get(environment.apiUrl + '/' +id);
  }
}

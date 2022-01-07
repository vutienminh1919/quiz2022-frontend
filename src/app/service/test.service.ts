import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Test} from "../model/test";

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(API_URL+'/tests')
  }

  saveTest(test: any): Observable<Test> {
    return this.http.post(API_URL+'/tests', test)
  }

  findById(id: number): Observable<Test> {
    return this.http.get(`${API_URL}/tests/${id}`)
  }

  updateTest(id: any, test: any): Observable<any> {
    console.log(id, test, "abc")
    return this.http.put(`${API_URL}/tests/${id}`, test)
  }

  deleteTest(id: any): Observable<Test>{
    return this.http.delete(`${API_URL}/tests/${id}`)
  }
}

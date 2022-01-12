import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/users');
  }
}

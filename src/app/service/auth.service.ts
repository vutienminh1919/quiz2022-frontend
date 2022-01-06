import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
  login(user: any): Observable<any> {
    //@ts-ignore
    return this.http.post<any>(API_URL + '/login',user);
  }

  register(user: any): Observable<any>{
    //@ts-ignore
    return this.http.post<any>(API_URL + '/register',user);
  }
  logout(): Observable<any>{
    //@ts-ignore
    return this.http.post<any>(API_URL + '/logout',null, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')} ` } });
  }
}

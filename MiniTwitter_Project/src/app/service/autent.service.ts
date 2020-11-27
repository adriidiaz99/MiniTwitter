import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginDto } from '../dto/login.dto';
import { LoginResponse } from '../model/loginResponse';
import { CookieService } from "ngx-cookie-service";


const url = "https://www.minitwitter.com:3001/apiv1/auth/login";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })
  export class AutentService {
  
    constructor(private http: HttpClient, private cookies: CookieService) { }
  
    login(loginDto: loginDto): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(
        url,
        loginDto,
        httpOptions
      );
    }

    setToken(token: string) {
      this.cookies.set("token", token);
    }
    getToken() {
      return this.cookies.get("token");
    }
  }
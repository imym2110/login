import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getToken() {
    return localStorage.getItem('access-token');
  }

  submitForm(temp : any){
     console.log(temp , 'from_service');
     const url = 'http://localhost:8501/api/auth/local';
    const body  = 
    {
      "identifier" : temp.identifier,
      "password" : temp.password
    }

    // const body1  = 
    // {
    //   "identifier": "foobar",
    //   "password": "Test1234"
    // }
    console.log(body,'from_body');
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      })
      console.log(body, "Service")
  return this.http.post(url, body);
  }
}

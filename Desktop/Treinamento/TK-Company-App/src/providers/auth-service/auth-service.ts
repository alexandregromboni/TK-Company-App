import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost:56661/api/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(type, credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + type, JSON.constructor(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  putData(type, credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.put(apiUrl + type, JSON.constructor(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  } 

  getData(type, credentials?) {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl + type, JSON.constructor(credentials))
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteData(type, credentials?) {
    return new Promise((resolve, reject) => {
      this.http.delete(apiUrl + type, JSON.constructor(credentials))
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}

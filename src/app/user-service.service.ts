import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface userInterface {
  [index : number] : {
    name: String,
    age: Number
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient ) { }

  getData () {

    const data : userInterface = [{
      name: 'XXX',
      age: 24
    },
    {
      name: 'YYY',
      age: 25
    }];

    return data;
  }

  getUsers () {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}



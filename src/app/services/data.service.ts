import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoData } from '../interface/todo-data';
// interface TodoData {
//   userId: number,
//   id: number,
//   title: string,
//   body: string
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getApiData () {
    return this.http.get<TodoData[]>('https://jsonplaceholder.typicode.com/todos');
  }
}

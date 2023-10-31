import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostData } from '../interface/post-data';
// interface PostData {
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
    return this.http.get<PostData[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  private apiUrl = 'http://localhost:8000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  addPost(post: Post): Observable<any> {
    return this.http.post<Post>(this.apiUrl, post, httpOptions);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<Post>(this.apiUrl + '/' + id);
  }

  updatePost(id: number, post: Post): Observable<{}> {
    return this.http.put(this.apiUrl + '/' + id, post, httpOptions);
  }
}

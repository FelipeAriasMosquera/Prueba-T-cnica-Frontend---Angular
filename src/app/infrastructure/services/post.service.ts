import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from 'src/app/domain/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API_URL).pipe(
      catchError((err) => {
        console.error('Error al cargar posts:', err);
        return throwError(() => err);
      })
    );
  }
}

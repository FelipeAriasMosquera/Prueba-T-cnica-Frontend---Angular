import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/infrastructure/services/post.service';
import { Post } from 'src/app/domain/models/post.model';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  loading = false;
  error = '';
  private searchSubject = new Subject<string>();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();

    this.searchSubject.pipe(
      debounceTime(300),
      switchMap(search => {
        this.filteredPosts = this.posts.filter(post =>
          post.title.toLowerCase().includes(search.toLowerCase())
        );
        return [];
      })
    ).subscribe();
  }

  loadPosts(): void {
    this.loading = true;
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.filteredPosts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los posts.';
        this.loading = false;
      },
    });
  }

  onSearch(value: string) {
    this.searchSubject.next(value);
  }
}

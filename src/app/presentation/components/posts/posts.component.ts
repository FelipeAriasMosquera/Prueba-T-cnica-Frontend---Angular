import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/infrastructure/services/post.service';
import { Post } from 'src/app/domain/models/post.model';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  @Input() posts: Post[] = [];
  filteredPosts: Post[] = [];
  loading = false;
  searchTerm: string = '';
  error = '';
  private searchSubject = new Subject<string>();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();

    this.searchSubject.pipe(
      debounceTime(350), // debounceTime: delay, para que no se sobrecargue el servidor
      switchMap(search => { // switchMap: se usa para buscar en tiempo real 
        this.filteredPosts = this.posts.filter(post =>
          post.title.toLowerCase().includes(search.toLowerCase())
        );
        return [];
      })
    ).subscribe();
  }

  loadPosts(): void {
    this.loading = true;
    setTimeout(()=> {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.filteredPosts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los posts.';
        this.loading = false;
   }
    });
  }, 2000);
}
  

 onSearch(term: string): void {
    this.searchTerm = term;
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/domain/models/post.model';

@Pipe({
  name: 'filterPosts'
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: Post[], search: string): Post[] {
    if (!search) return posts;
    return posts.filter(post => 
        post.title.toLowerCase().includes(search.toLowerCase()));
  }
}


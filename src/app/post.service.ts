import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './posts/post.module';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts:Post[] = [];

  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    return [...this.posts]; //copy elements not refrence it.
  }

  getPostUpdateListner() {
    return this.postsUpdated.asObservable();
  }

  addPost(content: string) {
    const post: Post = {
      content: content
    };

    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);

  }
  
  deletePost(content: string) {
    this.posts.forEach((p , indx) => {
      if(p.content == content)
        this.posts.splice(indx , 1);
    })
  
    this.postsUpdated.next([...this.posts]);
  }

}

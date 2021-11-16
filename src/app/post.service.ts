import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './posts/post.module';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts:Post[] = [];

  private postsUpdated = new Subject<Post[]>();

  constructor(private webReqService: WebRequestService) { }

  getPosts() {
    return this.webReqService.get('api/posts');
  }

  getPostUpdateListner() {
    return this.postsUpdated.asObservable();
  }

  addPost(content: string) {
    return this.webReqService.post('api/posts', { content });

  }
  
  deletePost(content: string) {
    this.posts.forEach((p , indx) => {
      if(p.content == content)
        this.posts.splice(indx , 1);
    })
  
    this.postsUpdated.next([...this.posts]);
  }

}

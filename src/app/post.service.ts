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
  replacePost(content: string, result: string) {
    return this.webReqService.patch('api/posts', { content });
  }
  
  deletePost(post: Post) {
    return this.webReqService.delete(`api/posts/${post._id}`);
  }

}

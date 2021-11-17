import { Injectable } from '@angular/core';
import { Post } from './posts/post.module';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private webReqService: WebRequestService) { }

  getPosts(userID: string) {
    return this.webReqService.get(`api/users/${userID}/posts`);
  }

  addPost(content: string, userID: string) {
    return this.webReqService.post(`api/users/${userID}/posts`, { content });

  }
  replacePost(firstPost: Post, secondPost: Post, userID: string) {
    return this.webReqService.patch(`api/users/${userID}/posts/${firstPost._id}`, { content: secondPost.content });
  }
  
  deletePost(post: Post, userID:string) {
    return this.webReqService.delete(`api/users/${userID}/posts/${post._id}`);
  }

}

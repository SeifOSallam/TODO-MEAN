import { Component , OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PostService } from "../post.service";

import { NgForm } from '@angular/forms'

import { Post } from '../posts/post.module'


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy {

    //posts = [
    //    { title: 'First Post' , content: 'This is the first post\'s content' },
    //    { title: 'Second Post' , content: 'This is the second post\'s content' },
    //    { title: 'Third Post' , content: 'This is the third post\'s content' }
    //];

    posts:Post[] = [];

    private postsSub: Subscription = new Subscription;

    //postService: PostService;

    constructor (public postService: PostService) { // angular makes postService member and assign it.
        //this.postService = postService;
    }

    ngOnInit() {
        this.posts = this.postService.getPosts();

        this.postsSub = this.postService.getPostUpdateListner()
            .subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

    deletePost(content: string) {
        this.postService.deletePost(content);
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }

}
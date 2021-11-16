import { Component , OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PostService } from "../post.service";

import { NgForm } from '@angular/forms'

import { Post } from '../posts/post.module'
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { PostEditComponent } from "../post-edit/post-edit.component";


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

    //posts = [
    //    { title: 'First Post' , content: 'This is the first post\'s content' },
    //    { title: 'Second Post' , content: 'This is the second post\'s content' },
    //    { title: 'Third Post' , content: 'This is the third post\'s content' }
    //];

    posts: Post[] = [];

    //postService: PostService;

    constructor (public postService: PostService , public dialog: MatDialog) { // angular makes postService member and assign it.
        //this.postService = postService;
    }

    ngOnInit() {




         this.postService.getPosts().subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

    deletePost(post: Post) {
        this.postService.deletePost(post).subscribe(()=>{
            console.log("Deleted "+post._id);
            location.reload();
        });
    }

    editePost(content: string) {

        let dialogRef = this.dialog.open(PostEditComponent, {
            width: '700px',
            data: content
          });

          dialogRef.afterClosed().subscribe((result) => {
              if(result) {
                  this.postService.replacePost(content , result);
              }
          })

    }

}

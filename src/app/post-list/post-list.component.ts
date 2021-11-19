import { Component , OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PostService } from "../post.service";
import { ActivatedRoute, Params } from '@angular/router';

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

    constructor (public postService: PostService , public dialog: MatDialog, public route: ActivatedRoute) { // angular makes postService member and assign it.
        //this.postService = postService;
    }
    userID:string;
    ngOnInit() {
        this.route.params.subscribe((params: Params)=>{
            console.log(params);
          })
          this.userID=this.route.snapshot.paramMap.get('userID')!;
          console.log(this.userID);

         this.postService.getPosts(this.userID).subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

    deletePost(post: Post) {
        this.postService.deletePost(post,this.route.snapshot.paramMap.get('userID')!).subscribe(()=>{
            console.log("Deleted "+post._id);
            location.reload();
        });
    }

    editePost(post: Post) {
        let dialogRef = this.dialog.open(PostEditComponent, {
            width: '700px',
            data: post.content
          });
          
          dialogRef.afterClosed().subscribe((result: Post) => {
            console.log(post);
            console.log(result);
              this.postService.replacePost(post , result, this.userID)
              .subscribe((resulted: Post) =>{
                  console.log("Post: " + post);
                  console.log("Result: " + resulted); 
                  });
          })

    }

}

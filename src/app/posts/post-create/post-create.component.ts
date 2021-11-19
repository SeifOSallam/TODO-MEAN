import { Component } from "@angular/core"
import { NgForm } from "@angular/forms";
import { PostService } from "src/app/post.service";
import { Post } from "src/app/posts/post.module";
import { ActivatedRoute, Params } from '@angular/router';



@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    
    enteredContent = '';

    constructor(public postService: PostService,public route: ActivatedRoute) {

    }

    onAddPost (form: NgForm) {

        if(form.invalid)
            return;

       // const post = {
       //     title: form.value.title ,
       //    content: form.value.content
       //     };

        //this.postService.addPost(form.value.content);
        return this.postService.addPost(form.value.content, this.route.snapshot.paramMap.get('userID')!)
        .subscribe((post: Post) =>{
            console.log(post);
            console.log(this.route.snapshot.paramMap.get('userID')!);
            form.resetForm();
            //location.reload();
        })
        
        
    }
}
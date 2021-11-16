import { Component } from "@angular/core"
import { NgForm } from "@angular/forms";
import { PostService } from "src/app/post.service";

//import { Post } from '../post.module'

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    
    enteredContent = '';

    constructor(public postService: PostService) {

    }

    onAddPost (form: NgForm) {

        if(form.invalid)
            return;

       // const post = {
       //     title: form.value.title ,
       //    content: form.value.content
       //     };

        //this.postService.addPost(form.value.content);
        return this.postService.addPost(form.value.content)
        .subscribe((response: any) =>{
            console.log(response);
            form.resetForm();
        })
        
        
    }
}
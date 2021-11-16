import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { Post } from '../posts/post.module'


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PostEditComponent> , 
    @Inject(MAT_DIALOG_DATA) public content: String ) {
      
     }

     

  ngOnInit(): void {
  }


  onFormSubmit(form: NgForm) {
    if(form.valid)
      this.dialogRef.close(form.value.content);
  }

  close() {
    this.dialogRef.close();
  }

}

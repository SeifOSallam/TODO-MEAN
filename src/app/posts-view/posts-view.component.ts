import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }
  userID: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      console.log(params);
    })
  }

}

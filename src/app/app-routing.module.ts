import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
const routes: Routes = [
  { path: "", component:PostListComponent},
  { path: "", component:PostCreateComponent},
  { path: "", component:PostEditComponent},
  //{ path: "", component:PostListComponent},
  //{ path: "", component:PostCreateComponent},
  //{ path: "", component:PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'signed/:userID' , component: PostsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule  } from '@angular/material/input';
import {  MatCardModule } from '@angular/material/card';
import {  MatButtonModule } from '@angular/material/button';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderXComponent } from './headerX/headerX.component';



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    PostEditComponent,
    PostsViewComponent,
    LoginComponent,
    SingupComponent,
    HeaderXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

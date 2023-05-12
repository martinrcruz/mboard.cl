import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { GetPostComponent } from './get-post/get-post.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListPostsComponent
      },
      {
        path: 'add',
        component: AddPostComponent
      },
      {
        path: 'edit',
        component: EditPostComponent
      },
      {
        path: 'get',
        component: GetPostComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class PostRoutingModule { }

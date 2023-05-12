import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { GetPostComponent } from './post/get-post/get-post.component';
import { ListPostsComponent } from './post/list-posts/list-posts.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    AddPostComponent,
    EditPostComponent,
    GetPostComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MenuRoutingModule,
    MatCheckboxModule,
    ScrollingModule,
    MatChipsModule,
    NgxDropzoneModule
  ]
})
export class MenuModule { }

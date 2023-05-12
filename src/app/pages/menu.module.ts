import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { GetPostComponent } from './post/get-post/get-post.component';
import { ListPostsComponent } from './post/list-posts/list-posts.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';



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
    MatChipsModule
  ]
})
export class MenuModule { }

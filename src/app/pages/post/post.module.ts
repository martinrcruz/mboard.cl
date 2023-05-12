import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../menu.module';
import { PostRoutingModule } from './post-routing.module';
import { ViewPostComponent } from './view-post/view-post.component';



@NgModule({
  declarations: [
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MenuModule
  ]
})
export class PostModule { }

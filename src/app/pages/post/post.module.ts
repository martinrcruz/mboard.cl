import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../menu.module';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostRoutingModule,
    MenuModule
  ]
})
export class PostModule { }

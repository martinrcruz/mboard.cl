import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;


  displayedColumns: string[] = [
    'id',
    'title',
    'buyPrice',
    'sellPrice',
    'discountPrice',
    'brand',
    'model',
    'version',
    'kilometers',
    'bodyType',
    'fuelType',
    'transmission',
    'traction',
    'color',
    'doors',
    'status',
    'createdBy',
    'createdAt',
    'revisar',
    'editar',
    'eliminar'
  ];

  dataSource: any;

  constructor(
    private _post: PostService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this._post.listPosts()
      .subscribe({
        next: (res: any) => {
          this.dataSource = new MatTableDataSource(res.dto);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err: any) => {
          alert('Error fetching')
        }
      })
  }

  goToAddPost() {
    this._router.navigateByUrl("post/add");
  }

  goToGetPost() {
    this._router.navigateByUrl("post/get");
  }

  goToEditPost() {
    this._router.navigateByUrl("post/edit");
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

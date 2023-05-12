import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum PostRoutes {
  GET_POST = '/api/post/id:',
  LIST_POSTS = '/api/post/list',
  EDIT_POST = '/api/post/edit',
  DELETE_POST = '/api/post/delete',
  SAVE_POST = '/api/post/save',
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getPost(id: number): any {
    let params = `id=${id}`;
    return this._http.get(this.apiUrl + `${PostRoutes.GET_POST}?${params}`)
      .pipe(
        map((response) => {
          if (response) {
            return response;
          }
          throw new Error('error');
        })
      )
  }

  listPosts(): any {
    return this._http.get(this.apiUrl + PostRoutes.LIST_POSTS)
      .pipe(
        map((response) => {
          console.log(response);
          if (response) {
            return response;
          }
          throw new Error('error');
        })
      )
  }
}

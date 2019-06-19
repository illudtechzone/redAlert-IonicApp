/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PostDTO } from '../models/post-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly createPostUsingPOSTPath = '/api/posts/create';
  static readonly deletePostUsingDELETEPath = '/api/posts/delete';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param postDTO postDTO
   * @return OK
   */
  createPostUsingPOSTResponse(postDTO: PostDTO): __Observable<__StrictHttpResponse<PostDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = postDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/posts/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostDTO>;
      })
    );
  }
  /**
   * @param postDTO postDTO
   * @return OK
   */
  createPostUsingPOST(postDTO: PostDTO): __Observable<PostDTO> {
    return this.createPostUsingPOSTResponse(postDTO).pipe(
      __map(_r => _r.body as PostDTO)
    );
  }

  /**
   * @param id id
   */
  deletePostUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/posts/delete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deletePostUsingDELETE(id: number): __Observable<null> {
    return this.deletePostUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CommandResourceService {
}

export { CommandResourceService }

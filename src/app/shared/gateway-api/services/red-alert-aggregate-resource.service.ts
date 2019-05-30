/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommentDTO } from '../models/comment-dto';

import { FriendDTO } from '../models/friend-dto';
import { PostDTO } from '../models/post-dto';

/**
 * Red Alert Aggregate Resource
 */
@Injectable({
  providedIn: 'root',
})
class RedAlertAggregateResourceService extends __BaseService {
  static readonly CraeteCommentUsingPOSTPath = '/api/comment';
  static readonly findCommentByPostIdUsingGETPath = '/api/comment/{postId}';
  static readonly createFriendUsingPOSTPath = '/api/friends';
  static readonly findByUserNameUsingGETPath = '/api/friends/{userId}';
  static readonly CreatePostUsingPOSTPath = '/api/post';
  static readonly findPostsByUserIdUsingGETPath = '/api/post/{userId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param commentDTO commentDTO
   * @return OK
   */
  CraeteCommentUsingPOSTResponse(commentDTO: CommentDTO): __Observable<__StrictHttpResponse<CommentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = commentDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/comment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentDTO>;
      })
    );
  }
  /**
   * @param commentDTO commentDTO
   * @return OK
   */
  CraeteCommentUsingPOST(commentDTO: CommentDTO): __Observable<CommentDTO> {
    return this.CraeteCommentUsingPOSTResponse(commentDTO).pipe(
      __map(_r => _r.body as CommentDTO)
    );
  }

  /**
   * @param params The `RedAlertAggregateResourceService.FindCommentByPostIdUsingGETParams` containing the following parameters:
   *
   * - `postId`: postId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findCommentByPostIdUsingGETResponse(params: RedAlertAggregateResourceService.FindCommentByPostIdUsingGETParams): __Observable<__StrictHttpResponse<Array<CommentDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/comment/${params.postId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommentDTO>>;
      })
    );
  }
  /**
   * @param params The `RedAlertAggregateResourceService.FindCommentByPostIdUsingGETParams` containing the following parameters:
   *
   * - `postId`: postId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findCommentByPostIdUsingGET(params: RedAlertAggregateResourceService.FindCommentByPostIdUsingGETParams): __Observable<Array<CommentDTO>> {
    return this.findCommentByPostIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CommentDTO>)
    );
  }

  /**
   * @param friendDTO friendDTO
   * @return OK
   */
  createFriendUsingPOSTResponse(friendDTO: FriendDTO): __Observable<__StrictHttpResponse<FriendDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = friendDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/friends`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FriendDTO>;
      })
    );
  }
  /**
   * @param friendDTO friendDTO
   * @return OK
   */
  createFriendUsingPOST(friendDTO: FriendDTO): __Observable<FriendDTO> {
    return this.createFriendUsingPOSTResponse(friendDTO).pipe(
      __map(_r => _r.body as FriendDTO)
    );
  }

  /**
   * @param params The `RedAlertAggregateResourceService.FindByUserNameUsingGETParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findByUserNameUsingGETResponse(params: RedAlertAggregateResourceService.FindByUserNameUsingGETParams): __Observable<__StrictHttpResponse<Array<FriendDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/friends/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FriendDTO>>;
      })
    );
  }
  /**
   * @param params The `RedAlertAggregateResourceService.FindByUserNameUsingGETParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findByUserNameUsingGET(params: RedAlertAggregateResourceService.FindByUserNameUsingGETParams): __Observable<Array<FriendDTO>> {
    return this.findByUserNameUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<FriendDTO>)
    );
  }

  /**
>>>>>>> af24ed9b2d2f93bbffc52a9f1798e45e41a22864
   * @param postDTO postDTO
   * @return OK
   */
  CreatePostUsingPOSTResponse(postDTO: PostDTO): __Observable<__StrictHttpResponse<PostDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = postDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/post`,
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
  CreatePostUsingPOST(postDTO: PostDTO): __Observable<PostDTO> {
    return this.CreatePostUsingPOSTResponse(postDTO).pipe(
      __map(_r => _r.body as PostDTO)
    );
  }

  /**
   * @param params The `RedAlertAggregateResourceService.FindPostsByUserIdUsingGETParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findPostsByUserIdUsingGETResponse(params: RedAlertAggregateResourceService.FindPostsByUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<PostDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/post/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PostDTO>>;
      })
    );
  }
  /**
   * @param params The `RedAlertAggregateResourceService.FindPostsByUserIdUsingGETParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findPostsByUserIdUsingGET(params: RedAlertAggregateResourceService.FindPostsByUserIdUsingGETParams): __Observable<Array<PostDTO>> {
    return this.findPostsByUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<PostDTO>)
    );
  }
}

module RedAlertAggregateResourceService {

  /**
   * Parameters for findCommentByPostIdUsingGET
   */
  export interface FindCommentByPostIdUsingGETParams {

    /**
     * postId
     */
    postId: number;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findByUserNameUsingGET
   */
  export interface FindByUserNameUsingGETParams {

    /**
     * userId
     */
    userId: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findPostsByUserIdUsingGET
   */
  export interface FindPostsByUserIdUsingGETParams {

    /**
     * userId
     */
    userId: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }
}

export { RedAlertAggregateResourceService }

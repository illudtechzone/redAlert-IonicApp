/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PostDTO } from '../models/post-dto';
import { User } from '../models/user';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly createPostUsingPOSTPath = '/api/posts/create';
  static readonly deletePostUsingDELETEPath = '/api/posts/delete';
  static readonly createUserUsingPOSTPath = '/api/user/create';
  static readonly friendRequestUsingPOSTPath = '/api/user/createFriendRequest';
  static readonly deleteUserUsingDELETEPath = '/api/user/delete';
  static readonly acceptRequestUsingPOSTPath = '/api/user/{userId}/acceptedRequest/{friendId}';
  static readonly unfriendUsingDELETEPath = '/api/user/{userId}/unFriend/{friendId}';

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

  /**
   * @param user user
   * @return OK
   */
  createUserUsingPOSTResponse(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/user/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param user user
   * @return OK
   */
  createUserUsingPOST(user: User): __Observable<User> {
    return this.createUserUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param params The `CommandResourceService.FriendRequestUsingPOSTParams` containing the following parameters:
   *
   * - `user`: user
   *
   * - `friend`: friend
   */
  friendRequestUsingPOSTResponse(params: CommandResourceService.FriendRequestUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.user;
    __body = params.friend;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/user/createFriendRequest`,
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
   * @param params The `CommandResourceService.FriendRequestUsingPOSTParams` containing the following parameters:
   *
   * - `user`: user
   *
   * - `friend`: friend
   */
  friendRequestUsingPOST(params: CommandResourceService.FriendRequestUsingPOSTParams): __Observable<null> {
    return this.friendRequestUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param user user
   * @return OK
   */
  deleteUserUsingDELETEResponse(user: User): __Observable<__StrictHttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/user/delete`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: (_r as HttpResponse<any>).body === 'true' }) as __StrictHttpResponse<boolean>
      })
    );
  }
  /**
   * @param user user
   * @return OK
   */
  deleteUserUsingDELETE(user: User): __Observable<boolean> {
    return this.deleteUserUsingDELETEResponse(user).pipe(
      __map(_r => _r.body as boolean)
    );
  }

  /**
   * @param params The `CommandResourceService.AcceptRequestUsingPOSTParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `friendId`: friendId
   *
   * @return OK
   */
  acceptRequestUsingPOSTResponse(params: CommandResourceService.AcceptRequestUsingPOSTParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.friendId != null) __params = __params.set('friendId', params.friendId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/user/${params.userId}/acceptedRequest/${params.friendId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.AcceptRequestUsingPOSTParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `friendId`: friendId
   *
   * @return OK
   */
  acceptRequestUsingPOST(params: CommandResourceService.AcceptRequestUsingPOSTParams): __Observable<User> {
    return this.acceptRequestUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param params The `CommandResourceService.UnfriendUsingDELETEParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `friendId`: friendId
   *
   * @return OK
   */
  unfriendUsingDELETEResponse(params: CommandResourceService.UnfriendUsingDELETEParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/user/${params.userId}/unFriend/${params.friendId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.UnfriendUsingDELETEParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `friendId`: friendId
   *
   * @return OK
   */
  unfriendUsingDELETE(params: CommandResourceService.UnfriendUsingDELETEParams): __Observable<User> {
    return this.unfriendUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module CommandResourceService {

  /**
   * Parameters for friendRequestUsingPOST
   */
  export interface FriendRequestUsingPOSTParams {

    /**
     * user
     */
    user: User;

    /**
     * friend
     */
    friend: User;
  }

  /**
   * Parameters for acceptRequestUsingPOST
   */
  export interface AcceptRequestUsingPOSTParams {

    /**
     * userId
     */
    userId: string;

    /**
     * friendId
     */
    friendId?: string;
  }

  /**
   * Parameters for unfriendUsingDELETE
   */
  export interface UnfriendUsingDELETEParams {

    /**
     * userId
     */
    userId: string;

    /**
     * friendId
     */
    friendId: string;
  }
}

export { CommandResourceService }

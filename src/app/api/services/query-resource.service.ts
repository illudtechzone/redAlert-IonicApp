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
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly getAlldetailsByUserIdUsingGETPath = '/api/posts/user_id';
  static readonly findAllFriendRequestUsingGETPath = '/api/user/findAllFriendRequests/{userId}';
  static readonly findFriendsUsingGETPath = '/api/user/findFriends/{userId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `QueryResourceService.GetAlldetailsByUserIdUsingGETParams` containing the following parameters:
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
  getAlldetailsByUserIdUsingGETResponse(params: QueryResourceService.GetAlldetailsByUserIdUsingGETParams): __Observable<__StrictHttpResponse<Array<PostDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/posts/user_id`,
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
   * @param params The `QueryResourceService.GetAlldetailsByUserIdUsingGETParams` containing the following parameters:
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
  getAlldetailsByUserIdUsingGET(params: QueryResourceService.GetAlldetailsByUserIdUsingGETParams): __Observable<Array<PostDTO>> {
    return this.getAlldetailsByUserIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<PostDTO>)
    );
  }

  /**
   * @param userId userId
   * @return OK
   */
  findAllFriendRequestUsingGETResponse(userId: string): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user/findAllFriendRequests/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * @param userId userId
   * @return OK
   */
  findAllFriendRequestUsingGET(userId: string): __Observable<Array<User>> {
    return this.findAllFriendRequestUsingGETResponse(userId).pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * @param userId userId
   * @return OK
   */
  findFriendsUsingGETResponse(userId: string): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/user/findFriends/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * @param userId userId
   * @return OK
   */
  findFriendsUsingGET(userId: string): __Observable<Array<User>> {
    return this.findFriendsUsingGETResponse(userId).pipe(
      __map(_r => _r.body as Array<User>)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for getAlldetailsByUserIdUsingGET
   */
  export interface GetAlldetailsByUserIdUsingGETParams {

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

export { QueryResourceService }

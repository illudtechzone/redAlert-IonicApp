/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDTO } from '../models/user-dto';

/**
 * User Resource
 */
@Injectable({
  providedIn: 'root',
})
class UserResourceService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UserResourceService.GetAllUsersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllUsersUsingGETResponse(params: UserResourceService.GetAllUsersUsingGETParams): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * @param params The `UserResourceService.GetAllUsersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllUsersUsingGET(params: UserResourceService.GetAllUsersUsingGETParams): __Observable<Array<UserDTO>> {
    return this.getAllUsersUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * @param params The `UserResourceService.AddFriendUsingGETParams` containing the following parameters:
   *
   * - `email`: email
   *
   * - `name`:
   *
   * @return OK
   */
  addFriendUsingGETResponse(params: UserResourceService.AddFriendUsingGETParams): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/add-friend/${params.email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * @param params The `UserResourceService.AddFriendUsingGETParams` containing the following parameters:
   *
   * - `email`: email
   *
   * - `name`:
   *
   * @return OK
   */
  addFriendUsingGET(params: UserResourceService.AddFriendUsingGETParams): __Observable<Array<UserDTO>> {
    return this.addFriendUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * @return OK
   */
  getAuthoritiesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/authorities`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAuthoritiesUsingGET(): __Observable<Array<string>> {
    return this.getAuthoritiesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param email email
   * @return OK
   */
  getUserByEmailUsingGETResponse(email: string): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/email/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * @param email email
   * @return OK
   */
  getUserByEmailUsingGET(email: string): __Observable<UserDTO> {
    return this.getUserByEmailUsingGETResponse(email).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param params The `UserResourceService.GetSuggestionsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * - `name`:
   *
   * @return OK
   */
  getSuggestionsUsingGETResponse(params: UserResourceService.GetSuggestionsUsingGETParams): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/friend-suggestions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * @param params The `UserResourceService.GetSuggestionsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * - `name`:
   *
   * @return OK
   */
  getSuggestionsUsingGET(params: UserResourceService.GetSuggestionsUsingGETParams): __Observable<Array<UserDTO>> {
    return this.getSuggestionsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * @param email email
   * @return OK
   */
  getFriendsUsingGETResponse(email: string): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/friends-of/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * @param email email
   * @return OK
   */
  getFriendsUsingGET(email: string): __Observable<Array<UserDTO>> {
    return this.getFriendsUsingGETResponse(email).pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * @param params The `UserResourceService.UnFriendUsingGETParams` containing the following parameters:
   *
   * - `email`: email
   *
   * - `name`:
   *
   * @return OK
   */
  unFriendUsingGETResponse(params: UserResourceService.UnFriendUsingGETParams): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/un-friend/${params.email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * @param params The `UserResourceService.UnFriendUsingGETParams` containing the following parameters:
   *
   * - `email`: email
   *
   * - `name`:
   *
   * @return OK
   */
  unFriendUsingGET(params: UserResourceService.UnFriendUsingGETParams): __Observable<Array<UserDTO>> {
    return this.unFriendUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * @param login login
   * @return OK
   */
  getUserUsingGETResponse(login: string): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/${login}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * @param login login
   * @return OK
   */
  getUserUsingGET(login: string): __Observable<UserDTO> {
    return this.getUserUsingGETResponse(login).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }
}

module UserResourceService {

  /**
   * Parameters for getAllUsersUsingGET
   */
  export interface GetAllUsersUsingGETParams {

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
   * Parameters for addFriendUsingGET
   */
  export interface AddFriendUsingGETParams {

    /**
     * email
     */
    email: string;
    name?: string;
  }

  /**
   * Parameters for getSuggestionsUsingGET
   */
  export interface GetSuggestionsUsingGETParams {

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
    name?: string;
  }

  /**
   * Parameters for unFriendUsingGET
   */
  export interface UnFriendUsingGETParams {

    /**
     * email
     */
    email: string;
    name?: string;
  }
}

export { UserResourceService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthInfoVM } from '../models/auth-info-vm';

/**
 * Auth Info Resource
 */
@Injectable({
  providedIn: 'root',
})
class AuthInfoResourceService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAuthInfoUsingGETResponse(): __Observable<__StrictHttpResponse<AuthInfoVM>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/auth-info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthInfoVM>;
      })
    );
  }
  /**
   * @return OK
   */
  getAuthInfoUsingGET(): __Observable<AuthInfoVM> {
    return this.getAuthInfoUsingGETResponse().pipe(
      __map(_r => _r.body as AuthInfoVM)
    );
  }
}

module AuthInfoResourceService {
}

export { AuthInfoResourceService }

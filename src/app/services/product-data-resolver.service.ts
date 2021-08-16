import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataResolverService implements Resolve<Observable<any>> {
  /* api stuff really goes in products service */
  apiUrlTodo = 'https://jsonplaceholder.typicode.com/todos/1';

  apiUrlPost = 'https://jsonplaceholder.typicode.com/';
  // apiUrlPost = 'https://jsonplaceholder.typicode.com/posts';

  // apiUrlUsers = 'https://jsonplaceholder.typicode.com/users/1';

  constructor(
    readonly http: HttpClient
  ) { }

  /* SIMULATE logged in by sending accountId param as 1 */
  getPlaceholderData(params?: number): Observable<any> {
    const hasParams = params ? 'posts/' + params : 'todos/1';
    return this.http.get(this.apiUrlPost + hasParams);
  }

  /* externalResolver(){} */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.getPlaceholderData();
  }

}

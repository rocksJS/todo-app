import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decreaseRequestsCount, increaseRequestsCount } from 'src/app/ngrx/actions/core.actions';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(increaseRequestsCount());
    return next.handle(request).pipe(
      finalize(() => {
        this.store.dispatch(decreaseRequestsCount());
      }),
    );
  }
}

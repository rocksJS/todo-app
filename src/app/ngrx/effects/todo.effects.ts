import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { TodosApiService } from 'src/app/shared/services/todosApi.service';
import { loadTodos, loadTodosFailure, loadTodosSuccess } from '../actions/todo.actions';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private store: Store, private todosApiService: TodosApiService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.todosApiService.getTodos().pipe(
          map((todos: any) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error }))),
        ),
      ),
    ),
  );
}

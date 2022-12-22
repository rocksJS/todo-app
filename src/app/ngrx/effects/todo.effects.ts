import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, from, take } from 'rxjs';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { RealtimeDatabaseService } from 'src/app/shared/services/realtime-database.service';
import { TodosApiService } from 'src/app/shared/services/todosApi.service';
import {
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  deleteSelectedTodos,
  deleteSelectedTodosFailure,
  deleteSelectedTodosSuccess,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  updateTodo,
  updateTodoFailure,
  updateTodoSuccess,
} from '../actions/todo.actions';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private todosApiService: TodosApiService,
    private realtimeDbService: RealtimeDatabaseService,
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.realtimeDbService.getTodos().pipe(
          take(1),
          map((todos: any) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error }))),
        ),
      ),
    ),
  );

  deleteSelectedTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSelectedTodos),
      switchMap(() =>
        this.todosApiService.deleteSelectedTodos().pipe(
          map((todos: any) => deleteSelectedTodosSuccess({ todos })),
          catchError((error) => of(deleteSelectedTodosFailure({ error }))),
        ),
      ),
    ),
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodo),
      switchMap((action) =>
        this.todosApiService.createTodo(action.todo).pipe(
          map((todo) => createTodoSuccess({ todo })),
          catchError((error) => of(createTodoFailure({ error }))),
        ),
      ),
    ),
  );
}

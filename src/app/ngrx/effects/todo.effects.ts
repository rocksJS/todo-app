import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { TodosApiService } from 'src/app/shared/services/todos-api.service';
import {
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  deleteExpiredTodos,
  deleteExpiredTodosFailure,
  deleteExpiredTodosSuccess,
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
  constructor(private actions$: Actions, private todosApiService: TodosApiService) {}

  loadTodos$ = createEffect(() =>
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

  deleteSelectedTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSelectedTodos),
      switchMap(() =>
        this.todosApiService.deleteSelectedTodos().pipe(
          take(1),
          switchMap((todos: any) => [deleteSelectedTodosSuccess({ todos }), loadTodos()]),
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
          switchMap(() => [createTodoSuccess(), loadTodos()]),
          catchError((error) => of(createTodoFailure({ error }))),
        ),
      ),
    ),
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      switchMap((action) =>
        this.todosApiService.updateTodo(action.todo).pipe(
          switchMap(() => [updateTodoSuccess(), loadTodos()]),
          catchError((error) => of(updateTodoFailure({ error }))),
        ),
      ),
    ),
  );

  deleteExpiredTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteExpiredTodos),
      switchMap(() =>
        this.todosApiService.deleteExpiredTodos().pipe(
          take(2),
          switchMap(() => [deleteExpiredTodosSuccess(), loadTodos()]),
          catchError((error) => of(deleteExpiredTodosFailure({ error }))),
        ),
      ),
    ),
  );
}

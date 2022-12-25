import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { RealtimeDatabaseService } from 'src/app/shared/services/realtime-database.service';
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
  constructor(private actions$: Actions, private realtimeDbService: RealtimeDatabaseService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.realtimeDbService.getTodos().pipe(
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
        this.realtimeDbService.deleteSelectedTodos().pipe(
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
        this.realtimeDbService.createTodo(action.todo).pipe(
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
        this.realtimeDbService.updateTodo(action.todo).pipe(
          switchMap(() => [updateTodoSuccess(), loadTodos()]),
          catchError((error) => of(updateTodoFailure({ error }))),
        ),
      ),
    ),
  );
}

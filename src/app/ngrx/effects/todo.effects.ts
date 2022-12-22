import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
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

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      switchMap((action) =>
        this.todosApiService.updateTodoSelectionState(action.todo).pipe(
          map((todo) => updateTodoSuccess({ todo })),
          catchError((error) => of(updateTodoFailure({ error }))),
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

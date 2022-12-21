import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { TodosApiService } from 'src/app/shared/services/todosApi.service';
import {
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

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      switchMap((action) =>
        this.todosApiService.updateTodoSelectionState(action.todo).pipe(
          map((todos) => updateTodoSuccess({ todos })),
          catchError((error) => of(updateTodoFailure({ error }))),
        ),
      ),
    ),
  );

  // deleteSelectedTodos$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(deleteSelectedTodos),
  //     switchMap((action) =>
  //       this.todosApiService.deleteTaskById(action.todos).pipe(
  //         map((todos) => deleteSelectedTodosSuccess({ todos })),
  //         catchError((error) => of(deleteSelectedTodosFailure({ error }))),
  //       ),
  //     ),
  //   ),
  // );
}

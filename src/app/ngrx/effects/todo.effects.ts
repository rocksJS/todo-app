import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { TodosApiService } from 'src/app/shared/services/api/todos-api.service';
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
  constructor(private actions$: Actions, private todosApiService: TodosApiService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.todosApiService.getTodos().pipe(
          take(1),
          map((todos: any) => {
            if (todos.length) {
              return loadTodosSuccess({ todos });
            }
          }),
          catchError((error) => of(loadTodosFailure({ error }))),
        ),
      ),
    ),
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      switchMap((action) =>
        this.todosApiService.updateTodo(action.todo).pipe(
          map((todo: ITodo) => {
            todo = action.todo;
            return updateTodoSuccess({ todo });
          }),
          catchError((error) => of(updateTodoFailure({ error }))),
        ),
      ),
    ),
  );

  deleteSelectedTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSelectedTodos),
      switchMap((action) =>
        this.todosApiService.deleteSelectedTodos(action.todos).pipe(
          take(1),
          map(() => {
            const todos = action.todos;
            return deleteSelectedTodosSuccess({ todos });
          }),
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
          take(1),
          map((todo: ITodo) => {
            todo = action.todo;
            return createTodoSuccess({ todo });
          }),
          catchError((error) => of(createTodoFailure({ error }))),
        ),
      ),
    ),
  );
}

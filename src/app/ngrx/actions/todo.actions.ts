import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

export const loadTodos = createAction('[TODOS] Load Todos');

export const loadTodosSuccess = createAction('[TODOS] Load Todos Success', props<{ todos: ITodo }>());

export const loadTodosFailure = createAction('[TODOS] Load Todos Failure', props<{ error: string }>());

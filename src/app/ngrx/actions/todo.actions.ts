import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';

export const loadTodos = createAction('[TODOS] Load Todos');

export const loadTodosSuccess = createAction('[TODOS] Load Todos Success', props<{ todos: ITodo }>());

export const loadTodosFailure = createAction('[TODOS] Load Todos Failure', props<{ error: string }>());

export const updateTodo = createAction('[TODOS] Update Todo', props<{ todo: ITodo }>());

export const updateTodoSuccess = createAction('[TODOS] Update Todo Success', props<{ todos: ITodo }>());

export const updateTodoFailure = createAction('[TODOS] Update Todo Failure', props<{ error: string }>());

export const deleteSelectedTodos = createAction('[TODOS] Deleted Selected Todos', props<{ todos: ITodo }>());

export const deleteSelectedTodosSuccess = createAction('[TODOS] Delete Selected Todos Success', props<{ todos: ITodo }>());

export const deleteSelectedTodosFailure = createAction('[TODOS] Delete Selected Todos Failure', props<{ error: string }>());

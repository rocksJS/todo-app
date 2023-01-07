import { createReducer, on } from '@ngrx/store';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { loadTodosSuccess } from '../actions/todo.actions';

export interface ITodoState {
  todos: ITodo | any;
}

const initialState: ITodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
  })),
);

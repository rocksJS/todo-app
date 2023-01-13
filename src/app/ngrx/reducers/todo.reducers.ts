import { createReducer, on } from '@ngrx/store';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { createTodoSuccess, deleteSelectedTodosSuccess, loadTodosSuccess, updateTodoSuccess } from '../actions/todo.actions';

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

  on(createTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, { ...todo }],
  })),

  on(updateTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((item: ITodo) => (item.id === todo.id ? todo : item)),
  })),
  on(deleteSelectedTodosSuccess, (state) => ({
    ...state,
    todos: state.todos.filter((item: ITodo) => !item.isSelected),
  })),
);

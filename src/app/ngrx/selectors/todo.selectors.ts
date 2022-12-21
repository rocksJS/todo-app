import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { ITodoState } from '../reducers/todo.reducers';

export const todosFeatureSelector = createFeatureSelector<ITodoState>('todo');

export const todosSelector = createSelector(todosFeatureSelector, (state: ITodoState) => state.todos);

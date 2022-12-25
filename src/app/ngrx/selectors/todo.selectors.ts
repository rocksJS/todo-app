import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodoState } from '../reducers/todo.reducers';

export const todosFeatureSelector = createFeatureSelector<ITodoState>('todo');

export const todosSelector = createSelector(todosFeatureSelector, (state: ITodoState) => state.todos);

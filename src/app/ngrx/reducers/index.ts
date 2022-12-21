import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ITodo } from 'src/app/shared/interfaces/todo.interface';
import { environment } from 'src/environments/environment';
import { ITodoState, todoReducer } from './todo.reducers';

export interface IState {
  todo: ITodoState;
}

export const reducers: ActionReducerMap<IState> = {
  todo: todoReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];

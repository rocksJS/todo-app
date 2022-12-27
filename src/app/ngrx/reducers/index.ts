import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ISettingsState, settingsReducer } from './settings.reducers';
import { ITodoState, todoReducer } from './todo.reducers';

export interface IState {
  todo: ITodoState;
  settings: ISettingsState;
}

export const reducers: ActionReducerMap<IState> = {
  todo: todoReducer,
  settings: settingsReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];

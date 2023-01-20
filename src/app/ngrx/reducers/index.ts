import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ICoreState, updateCoreReducer } from './core.reducers';
import { ISettingsState, settingsReducer } from './settings.reducers';
import { ITodoState, todoReducer } from './todo.reducers';

export interface IState {
  core: ICoreState;
  todo: ITodoState;
  settings: ISettingsState;
}

export const reducers: ActionReducerMap<IState> = {
  core: updateCoreReducer,
  todo: todoReducer,
  settings: settingsReducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];

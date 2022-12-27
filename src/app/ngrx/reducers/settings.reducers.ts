import { createReducer, on } from '@ngrx/store';
import { loadSettingsSuccess } from '../actions/settings.action';

export interface ISettingsState {
  settings: [];
}

const initialState: ISettingsState = {
  settings: [],
};
export const settingsReducer = createReducer(
  initialState,
  on(loadSettingsSuccess, (state, { settings }) => ({
    ...state,
    settings: settings,
  })),
);

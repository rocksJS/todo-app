import { createReducer, on } from '@ngrx/store';
import { ISettings } from 'src/app/shared/interfaces/settings.interface';
import { loadSettingsSuccess } from '../actions/settings.action';

export interface ISettingsState {
  settings: ISettings[];
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

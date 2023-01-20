import { createReducer, on } from '@ngrx/store';
import { ISetting } from 'src/app/shared/interfaces/settings.interface';
import { changeAutomaticDeleteSelectionSettingSuccess, loadSettingsSuccess } from '../actions/settings.actions';

export interface ISettingsState {
  settingsList: { [key: string]: ISetting };
}

const initialState: ISettingsState = {
  settingsList: {},
};
export const settingsReducer = createReducer(
  initialState,
  on(loadSettingsSuccess, (state, { settingsList }) => ({
    ...state,
    settingsList,
  })),
  on(changeAutomaticDeleteSelectionSettingSuccess, (state, { setting }) => ({
    ...state,
    settingsList: {
      ...state.settingsList,
      automaticDeleteSetting: {
        ...setting,
      },
    },
  })),
);

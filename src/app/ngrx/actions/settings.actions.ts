import { createAction, props } from '@ngrx/store';
import { ISetting } from 'src/app/shared/interfaces/settings.interface';

export const loadSettings = createAction('[SETTINGS] Load Settings');

export const loadSettingsSuccess = createAction('[SETTINGS] Load Settings Success', props<{ settingsList: { [key: string]: ISetting } }>());

export const loadSettingsFailure = createAction('[SETTINGS] Load Settings Failure', props<{ error: string }>());

export const changeAutomaticDeleteSelectionSetting = createAction(
  '[SETTINGS] Change Automatic Delete Setting',
  props<{ setting: ISetting }>(),
);

export const changeAutomaticDeleteSelectionSettingSuccess = createAction(
  '[SETTINGS] Change Automatic Delete Setting Success',
  props<{ setting: ISetting }>(),
);

export const changeAutomaticDeleteSelectionSettingFailure = createAction(
  '[SETTINGS] Change Automatic Delete Setting Failure',
  props<{ error: string }>(),
);

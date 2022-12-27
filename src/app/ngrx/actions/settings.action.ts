import { createAction, props } from '@ngrx/store';

export const loadSettings = createAction('[SETTINGS] Load Settings');

export const loadSettingsSuccess = createAction('[SETTINGS] Load Settings Success', props<{ settings: any }>());

export const loadSettingsFailure = createAction('[SETTINGS] Load Settings Failure', props<{ error: string }>());

export const changeTemporaryTaskDelete = createAction('[SETTINGS] Change Temporary Task Delete', props<{ setting: boolean }>());

export const changeTemporaryTaskDeleteSuccess = createAction('[SETTINGS] Change Temporary Task Delete Success');

export const changeTemporaryTaskDeleteFailure = createAction('[SETTINGS] Change Temporary Task Delete Failure', props<{ error: string }>());

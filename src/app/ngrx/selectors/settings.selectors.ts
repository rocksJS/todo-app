import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISettingsState } from '../reducers/settings.reducers';

export const settingsFeatureSelector = createFeatureSelector<ISettingsState>('settings');

export const settingsSelector = createSelector(settingsFeatureSelector, (state: ISettingsState) => state.settings);

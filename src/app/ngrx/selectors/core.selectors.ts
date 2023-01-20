import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICoreState } from '../reducers/core.reducers';

export const coreFeatureSelector = createFeatureSelector<ICoreState>('core');

export const spinnerSelector = createSelector(coreFeatureSelector, (state: any) => state?.requestsCount);

import { createAction } from '@ngrx/store';

export const increaseRequestsCount = createAction('[CORE] Increase requests counter');

export const decreaseRequestsCount = createAction('[CORE] Decrease requests counter');

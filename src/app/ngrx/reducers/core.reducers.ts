import { createReducer, on } from '@ngrx/store';
import { decreaseRequestsCount, increaseRequestsCount } from '../actions/core.actions';

export interface ICoreState {
  requestsCount: number;
}

const initialState: ICoreState = {
  requestsCount: 0,
};

export const updateCoreReducer = createReducer(
  initialState,
  on(increaseRequestsCount, (state) => ({
    ...state,
    requestsCount: state.requestsCount + 1,
  })),
  on(decreaseRequestsCount, (state) => ({
    ...state,
    requestsCount: state.requestsCount - 1,
  })),
);

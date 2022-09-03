import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  searchValue: string;
}

const INITIAL_STATE: State = {
  searchValue: '',
};

export const appReducer = createReducer(
  INITIAL_STATE,
  on(LayoutActions.searchedForProduct, (state, { searchValue }) => ({
    ...state,
    searchValue,
  }))
);

export const selectSearchValue = (state: State) => state.searchValue;

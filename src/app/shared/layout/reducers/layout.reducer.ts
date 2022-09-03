import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '../actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  searchValue: string;
}

const INITIAL_STATE: LayoutState = {
  searchValue: '',
};

export const appReducer = createReducer(
  INITIAL_STATE,
  on(LayoutActions.searchedForProduct, (state, { searchValue }) => ({
    searchValue,
  }))
);

export const selectSearchValue = (state: LayoutState) => state.searchValue;

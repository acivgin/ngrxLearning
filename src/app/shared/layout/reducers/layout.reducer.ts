import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '../actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  searchValue: string;
}

const INITIAL_LAYOUT_STATE: LayoutState = {
  searchValue: '',
};

export const appReducer = createReducer(
  INITIAL_LAYOUT_STATE,
  on(LayoutActions.searchedForProduct, (state, { searchValue }) => ({
    ...state,
    searchValue,
  })),
  on(LayoutActions.reset, () => INITIAL_LAYOUT_STATE)
);

export const searchValueSidenav = (state: LayoutState) => state.searchValue;

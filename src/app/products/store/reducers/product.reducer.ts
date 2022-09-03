import { createReducer, on } from '@ngrx/store';
import { ProductsActions } from '../actions';
import { Product } from '../../model/product';

export const productsFeatureKey = 'products';

export interface State {
  searchValue: string;
  products: Product[];
}

const initialState: State = {
  searchValue: '',
  products: [],
};

export const reducer = createReducer(
  initialState,
  on(ProductsActions.search, (state, { query }) => ({
    ...state,
    searchValue: query,
  })),
  on(ProductsActions.searchSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(ProductsActions.searchFailure, (state, { errorMsg }) => ({
    ...state,
    errorMsg,
  })),
  on(ProductsActions.reset, () => initialState)
);

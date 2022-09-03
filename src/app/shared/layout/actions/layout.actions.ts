import { createAction, props } from '@ngrx/store';

export const searchedForProduct = createAction(
  '[Layout] Search For Product',
  props<{ searchValue: string }>()
);

export const reset = createAction('[Layout] Search For Product');

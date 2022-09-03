import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Product } from '../../model/product';
import { GoogleProductService } from '../../services/book.service';
import { ProductsActions } from '../actions';

@Injectable()
export class ProductEffects {
  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.search),
      switchMap(({ query }) => {
        return this.googleProductService.searchProducts(query).pipe(
          map((products: Product[]) =>
            ProductsActions.searchSuccess({ products })
          ),
          catchError((err) =>
            of(ProductsActions.searchFailure({ errorMsg: err.message }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private googleProductService: GoogleProductService
  ) {}
}

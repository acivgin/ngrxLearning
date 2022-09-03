import { Product } from './../model/product';
import { GoogleProductService } from '../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProducts from '../store/reducers';
import { Observable } from 'rxjs';
import { selectSearchStateValue } from 'src/app/store/reducers';

@Component({
  template: `
    <app-list
      [searchValue]="searchValue$ | async"
      [products]="products$ | async"
    >
    </app-list>
  `,
  styles: [],
})
export class ListDisplayComponent implements OnInit {
  searchValue$: Observable<string>;
  products$: Observable<Product[]>;

  constructor(private store: Store<fromProducts.State>) {
    this.products$ = this.store.select(fromProducts.selectProducts);
    this.searchValue$ = this.store.select(fromProducts.selectProductSearch);
  }

  ngOnInit(): void {}
}

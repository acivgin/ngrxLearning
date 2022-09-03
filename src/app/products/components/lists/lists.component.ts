import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsActions } from '../../../products/store/actions';
import * as fromProducts from '../../store/reducers';
import { Product } from '../../model/product';

@Component({
  selector: 'app-list',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  @Input() searchValue: any;
  @Input() products!: Product[] | null;
  constructor(private store: Store<fromProducts.State>) {}

  ngOnInit(): void {}

  searchFieldChanged(searchValue: string): void {
    if (searchValue) {
      this.store.dispatch(ProductsActions.search({ query: searchValue }));
    } else {
      this.store.dispatch(ProductsActions.reset());
    }
  }
}

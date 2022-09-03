import { State } from './../../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from '../reducers/layout.reducer';
import { LayoutActions } from '../actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<fromLayout.LayoutState>) {}

  ngOnInit(): void {}

  searchFieldChanged(searchValue: string): void {
    this.store.dispatch(LayoutActions.searchedForProduct({ searchValue }));
  }
}

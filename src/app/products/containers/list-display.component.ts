import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromLayout from '../../store/reducers/index';
import { Observable } from 'rxjs';
import { selectSearchStateValue } from 'src/app/store/reducers';

@Component({
  template: ` <app-list [searchValue]="searchValue$ | async"> </app-list> `,
  styles: [],
})
export class ListDisplayComponent implements OnInit {
  searchValue$!: Observable<string>;
  constructor(private store: Store<fromLayout.State>) {
    this.searchValue$ = this.store.select(selectSearchStateValue);
  }

  ngOnInit(): void {}
}

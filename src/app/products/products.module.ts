import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './components/lists/lists.component';
import { ListDisplayComponent } from './containers/list-display.component';

import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';

import * as fromProducts from './store/reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['products'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

const routes: Routes = [
  {
    path: '',
    component: ListDisplayComponent,
  },
];

@NgModule({
  declarations: [ListsComponent, ListDisplayComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(
      fromProducts.productsModuleFeatureKey,
      fromProducts.reducers,
      { metaReducers }
    ),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductsModule {}

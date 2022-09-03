import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './components/lists/lists.component';
import { ListDisplayComponent } from './containers/list-display.component';

const routes: Routes = [
  {
    path: '',
    component: ListDisplayComponent,
  },
];

@NgModule({
  declarations: [ListsComponent, ListDisplayComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}

import { Routes } from '@angular/router';
import {ItemsComponent} from "./pages/items/items.component";
import {UpdateItemComponent} from "./pages/update-item/update-item.component";
import {AddItemComponent} from "./pages/add-item/add-item.component";

export const routes: Routes = [
  {
    path:'',
    component: ItemsComponent,
    title: 'Items',
  },
  {
    path: 'item/:itemId',
    component: UpdateItemComponent,
    title: 'Update item',
  },
  {
    path: 'items',
    component: AddItemComponent,
    title: 'Add item',
  }
];

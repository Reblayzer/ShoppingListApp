import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsService} from "../../api/items.service";
import {Item} from "../../model/Item";
import {defaultItemsModel, ItemsModel} from "./constants";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {Router} from "@angular/router";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit, OnDestroy {
  itemsModel: ItemsModel = defaultItemsModel();

  constructor(private itemService: ItemsService,
              private router: Router) {
  }

  async ngOnInit() {
    this.itemsModel.items = await this.itemService.getItems();
  }

  ngOnDestroy() {
    this.itemsModel = defaultItemsModel();
  }

  async checkItem(itemId: number | undefined) {
    if (itemId) {
      try {
        await this.itemService.checkItem(itemId);

        const newItems = this.itemsModel.items.map((item: Item) => {
          if (item.id === itemId) {
            return {
              ...item,
              bought: !item.bought
            };
          }
          return item;
        });
        this.itemsModel.items = newItems;

      } catch (error) {
        console.error(error);
      }
      console.log('check');
    }
  }

  async removeItem(itemId: number | undefined) {
    if(itemId) {
      try {
        await this.itemService.deleteItem(itemId);

        const newItems = this.itemsModel.items.filter((item: Item) => item.id !== itemId);
        this.itemsModel.items = newItems;

      } catch (error) {
        console.error(error);
      }
    }
  }

  navigateToUpdatePage(itemId: number | undefined) {
    if(itemId) {
      this.router.navigate([`/item/${itemId}`]);
    }
  }

  navigateToAdd() {
    this.router.navigate(['/items']);
  }

}

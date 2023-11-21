import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../../model/Item";
import {ItemsService} from "../../api/items.service";
import {FormsModule} from "@angular/forms";
import {defaultItem} from "./constants";

@Component({
  selector: 'app-update-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent implements OnInit, OnDestroy {

  itemId: number = -1;
  initialItem: Item = defaultItem();
  currentItem: Item = defaultItem();
  constructor(private activatedRoute: ActivatedRoute,
              private itemsService: ItemsService,
              private router: Router) {
    this.itemId = Number(this.activatedRoute.snapshot.params['itemId']);
  }

  async ngOnInit() {
    this.currentItem = await this.itemsService.getItem(this.itemId);
    this.initialItem = {
      ...this.currentItem
    } as Item;
  }

  async updateItem() {
    await this.itemsService.updateItem(this.currentItem).then(() => {
      this.router.navigate(['']);
    })
      .catch((error) => {
        console.error(error);
      });
  }

  isCurrenItemTheSame(): boolean {
    return this.initialItem.name === this.currentItem.name &&
    this.initialItem.description === this.currentItem.description;
  }

  ngOnDestroy() {
    this.itemId = -1;
    this.currentItem = defaultItem();
    this.initialItem = defaultItem();
  }
}

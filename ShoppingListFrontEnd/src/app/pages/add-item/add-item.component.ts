import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {defaultItem} from "./constants";
import {Item} from "../../model/Item";
import {ItemsService} from "../../api/items.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit, OnDestroy {
  itemToAdd: Item = defaultItem();

  constructor(private itemsService: ItemsService,
              private router: Router) {
  }

  ngOnInit() {
  }

  async addItem() {
    await this.itemsService.addItem(this.itemToAdd).then(() => {
      this.router.navigate(['']);
    }).catch((error) => {
      console.error(error);
    })
  }

  fieldsFullfilled(): boolean {
    return this.itemToAdd.name === defaultItem().name ||
      this.itemToAdd.description === defaultItem().description;
  }

  ngOnDestroy() {
    this.itemToAdd = defaultItem();
  }

}

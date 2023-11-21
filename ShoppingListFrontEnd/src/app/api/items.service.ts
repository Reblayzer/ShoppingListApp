import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Item } from "../model/Item";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private apiService: ApiService<Item | Item[]>) {
  }

  async addItem(item: Item): Promise<void> {
    await this.apiService.post('items', item).toPromise();
  }

  async getItems(): Promise<Item[]> {
    return this.apiService.get<Item[]>('items').toPromise() as Promise<Item[]>;
  }

  async getItem(itemId: number): Promise<Item> {
    return this.apiService.get<Item>(`items/${itemId}`).toPromise() as Promise<Item>;
  }

  async checkItem(itemId: number): Promise<void> {
    await this.apiService.patch(`items/${itemId}`, {}).toPromise();
  }

  async updateItem(item: Item): Promise<void> {
    await this.apiService.patch(`item`, item).toPromise();
  }

  async deleteItem(itemId: number): Promise<void> {
    await this.apiService.delete(`items/${itemId}`).toPromise();
  }
}

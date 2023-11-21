import {Item} from "../../model/Item";

export interface ItemsModel {
  items: Item[],
}

export const defaultItemsModel = (): ItemsModel =>  {
  return {
    items: [],
  } satisfies ItemsModel;
}

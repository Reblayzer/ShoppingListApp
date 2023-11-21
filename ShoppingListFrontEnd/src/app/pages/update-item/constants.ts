import {Item} from "../../model/Item";

export const defaultItem= (): Item => {
  return {
    description: '',
    name: '',
  } as Item;
}

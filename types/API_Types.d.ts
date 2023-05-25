import { Item } from "server/dist/src/models/ItemModel";
export interface PDPModel {
  item: ItemPDP;
  breadcrumb: string[];
}

interface ItemPDP extends Item {
  sold_quantity: number;
  description: string;
}

export interface PLPModel {
  categories: string[];
  items: Item[];
}
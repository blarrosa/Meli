import { Item } from "../../dist/src/models/ItemModel";

export interface Item_ML {
  id: string;
  site_id: string;
  title: string;
  subtitle: null;
  seller_id: number;
  category_id: string;
  official_store_id: null;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  start_time: Date;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: Picture[];
  video_id: null;
  descriptions: string[];
  accepts_mercadopago: boolean;
  shipping: Shipping;
  international_delivery_mode: string;
  coverage_areas: string[];
  attributes: Object[];
  listing_source: string;
  variations: string[];
  status: string;
  sub_status: string[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: null;
  differential_pricing: null;
  deal_ids: string[];
  automatic_relist: boolean;
  date_created: Date;
  last_updated: Date;
  health: null;
  catalog_listing: boolean;
  channels: string[];
  symbol: string;
  decimal_places: number;
  description: string;
  address: {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
  };
}

export interface Items_ML {
  results: Item_ML[];
}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

interface Shipping {
  mode: string;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface Categories extends Category {
  path_from_root: Category[];
}

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
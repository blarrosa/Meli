import { cachedQuery } from "../utils/cache";
import { API_ENDPOINTS } from "../utils/APIHelpers";

type Picture = {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
};

type Pictures = {
  thumbnail?: string;
  pictures?: Picture[];
};

type Currency = {
  id: string;
  symbol: string;
  decimals: number;
};

type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: Pictures;
  condition: string;
  free_shipping: boolean;
};

const mapPicturesFromData = (data: any) => ({
  thumbnail: data.thumbnail,
  //In this case, the only picture used is the thumbnail. It could return all the images of the item
  pictures: data.pictures?.find((pic: Picture) => pic.id === data.thumbnail_id),
});

const mapPriceFromData = async (data: any): Promise<Price> => {
  const currency: Currency = await cachedQuery<Currency>(
    API_ENDPOINTS.currencies(data.currency_id),
    data.currency_id,
    mapCurrency,
  );

  return {
    currency: currency.symbol,
    amount: data.price,
    decimals: currency.decimals,
  };
};

const mapCurrency = async (data: any): Promise<Currency> => ({
  id: data.id,
  symbol: data.symbol,
  decimals: data.decimal_places,
});

const mapItem = async (data: any): Promise<Item> => {
  return {
    id: data.id,
    title: data.title,
    price: await mapPriceFromData(data),
    picture: mapPicturesFromData(data),
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
  };
};

export default mapItem;

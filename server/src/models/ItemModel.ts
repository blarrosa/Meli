import { cachedQuery } from "../utils/cache";
import { API_ENDPOINTS } from "../utils/APIHelpers";
import {
  Categories,
  Currency,
  Item,
  Item_ML,
  Picture,
  Pictures,
  Price,
} from "../utils/MeLiAPITypes";

const mapPicturesFromData = (data: Item_ML): Pictures => ({
  thumbnail: data.thumbnail,
  //In this case, the only picture used is the thumbnail. It could return all the images of the item
  pictures: data.pictures?.filter((pic: Picture) => pic.id === data.thumbnail_id) || [],
});

const mapPriceFromData = async (data: Item_ML): Promise<Price> => {
  const currency: Currency = await cachedQuery<Currency, Item_ML>(
    API_ENDPOINTS.currencies(data.currency_id),
    data.currency_id,
    mapCurrency,
  );

  const [amount, decimals] = `${data.price}`.split(".");

  return {
    currency: currency,
    amount: +amount,
    decimals: +decimals || 0,
  };
};

const mapCurrency = (data: Item_ML): Currency => ({
  id: data.id,
  symbol: data.symbol,
  decimals: data.decimal_places,
});

export const mapCategory = (data: Categories): string[] => {
  return data.path_from_root.map((category) => category.name);
};

export const mapItem = async (data: Item_ML): Promise<Item> => {
  return {
    id: data.id,
    title: data.title,
    price: await mapPriceFromData(data),
    picture: mapPicturesFromData(data),
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
  };
};

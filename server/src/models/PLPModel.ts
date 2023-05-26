import { cachedQuery } from "../utils/cache";
import { API_ENDPOINTS } from "../utils/APIHelpers";
import { mapItem, mapCategory } from "./ItemModel";
import { Categories, Item_ML, Items_ML, PLPModel } from "../utils/MeLiAPITypes";

const getCategory = (data: Items_ML): string => {
  return data.results[0].category_id;
};

const getItemCity = (item: Item_ML): string => item.address.city_name;

const mapItemResponseToPLPModel = async (data: Items_ML): Promise<PLPModel> => ({
  categories: await cachedQuery<string[], Categories>(
    API_ENDPOINTS.categories(getCategory(data)),
    getCategory(data),
    mapCategory,
  ),
  items: await Promise.all(
    data.results.map(async (item: Item_ML) => ({
      ...(await mapItem(item)),
      city_name: getItemCity(item),
    })),
  ),
});

export default mapItemResponseToPLPModel;

import { cachedQuery } from "../utils/cache";
import { API_ENDPOINTS } from "../utils/APIHelpers";
import mapItem, { Item } from "./ItemModel";

export type PLPModel = {
  categories: string[];
  items: Item[];
};

const mapCategory = async (data: any): Promise<string> => data.name;

const getCategories = (data: any) => {
  const categories: string[] = [];

  data.results.forEach((item: any) => {
    if (!categories.includes(item.category_id)) {
      categories.push(item.category_id);
    }
  });

  return categories;
};

const mapItemResponseToPLPModel = async (data: any): Promise<PLPModel> => ({
  categories: await Promise.all(
    getCategories(data).map(
      async (category: string) =>
        await cachedQuery<string>(API_ENDPOINTS.categories(category), category, mapCategory),
    ),
  ),
  items: await Promise.all(data.results.map(async (item: any) => await mapItem(item))),
});

export default mapItemResponseToPLPModel;

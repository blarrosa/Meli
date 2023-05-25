import { Categories, Item_ML } from "../utils/MeLiAPITypes";
import { mapItem, mapCategory } from "./ItemModel";
import { cachedQuery } from "../utils/cache";
import { API_ENDPOINTS } from "../utils/APIHelpers";
import { ItemPDP, PDPModel } from "../../../types/API_Types";

const mapItemPDP = async (data: Item_ML): Promise<ItemPDP> => {
  const itemData = await mapItem(data);

  return {
    ...itemData,
    sold_quantity: data.sold_quantity,
    description: data.description,
  };
};

const mapItemResponseToPDPModel = async (data: Item_ML): Promise<PDPModel> => ({
  item: await mapItemPDP(data),
  breadcrumb: await cachedQuery<string[], Categories>(
    API_ENDPOINTS.categories(data.category_id),
    data.category_id,
    mapCategory,
  ),
});

export default mapItemResponseToPDPModel;

import mapItem, { Item } from "./ItemModel";

type ItemPDP = {
  sold_quantity: number;
  description: string;
} & Item;

export type PDPModel = {
  item: ItemPDP;
};

const mapItemPDP = async (data: any): Promise<ItemPDP> => {
  const itemData = await mapItem(data);

  return {
    ...itemData,
    sold_quantity: data.sold_quantity,
    description: data.description,
  };
};

const mapItemResponseToPDPModel = async (data: any): Promise<PDPModel> => ({
  item: await mapItemPDP(data),
});

export default mapItemResponseToPDPModel;

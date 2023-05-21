import express, { Request, Response } from "express";
import axios, { HttpStatusCode } from "axios";
import * as dotenv from "dotenv";
import mapItemResponseToPDPModel, { PDPModel } from "./models/PDPModel";
import mapItemResponseToPLPModel, { PLPModel } from "./models/PLPModel";
import signResponse from "./models/AuthorModel";
import { API_ENDPOINTS } from "./utils/APIHelpers";

dotenv.config({ path: "../.env.local" });
const app = express();
const PORT: number = parseInt(process.env.SERVER_PORT || "") || 3020;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const API_BASE_URL = "/api/items";

app.get(API_BASE_URL, async (req: Request, res: Response) => {
  const { q = "", limit = 10, offset = 10 } = req.query;

  const queryParams: URLSearchParams = new URLSearchParams({
    q: q as string,
    limit: limit as string,
    offset: offset as string,
  });

  try {
    const searchData = (await axios.get(API_ENDPOINTS.search({ site: "UY" }, queryParams))).data;
    const response = await mapItemResponseToPLPModel(searchData);

    res.send(signResponse<PLPModel>(response));
  } catch (error) {
    handleError(error, res);
  }
});

app.get(`${API_BASE_URL}/:id`, async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const itemData = (await axios.get(API_ENDPOINTS.items(id))).data;
    const itemDescription = (await axios.get(API_ENDPOINTS.itemDescription(id))).data;

    const response = await mapItemResponseToPDPModel({
      ...itemData,
      description: itemDescription.plain_text || itemDescription.text,
    });
    res.send(signResponse<PDPModel>(response));
  } catch (error) {
    handleError(error, res);
  }
});

export const handleError = (error: any, res: Response) => {
  if (axios.isAxiosError(error)) {
    if (error.response.status === HttpStatusCode.NotFound) {
      return res.status(404).send(`Sorry, we couldn't find the item you are looking for.`);
    }
  }
  return res.status(500).send("Currently our servers are not available. Please try later");
};
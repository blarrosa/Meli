import express, { Request, Response } from "express";
const cors = require("cors");
const path = require("path");
import axios, { HttpStatusCode } from "axios";
import * as dotenv from "dotenv";
import mapItemResponseToPDPModel from "./models/PDPModel";
import mapItemResponseToPLPModel from "./models/PLPModel";
import signResponse from "./models/AuthorModel";
import { API_ENDPOINTS } from "./utils/APIHelpers";
import { PDPModel, PLPModel } from "./utils/MeLiAPITypes";

dotenv.config({ path: "../.env.local" });

const PORT: number = parseInt(process.env.SERVER_PORT || "") || 3020;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});
app.use(express.static(path.join(__dirname, "../../../client/", "build")));

const API_BASE_URL = "/api/items";

app.get(API_BASE_URL, async (req: Request, res: Response) => {
  const { q = "", limit = 4, offset = 4 } = req.query;

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
    const [{ data: itemData }, { data: itemDescription }] = await Promise.all([
      axios.get(API_ENDPOINTS.items(id)),
      axios.get(API_ENDPOINTS.itemDescription(id)),
    ]);

    const response = await mapItemResponseToPDPModel({
      ...itemData,
      description: itemDescription.plain_text,
    });
    res.send(signResponse<PDPModel>(response));
  } catch (error) {
    handleError(error, res);
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any, res: Response) => {
  if (axios.isAxiosError(error)) {
    if (error.response!.status === HttpStatusCode.NotFound) {
      return res.status(404).send(`Sorry, we couldn't find the item you are looking for.`);
    }
  }
  return res.status(500).send("Currently our servers are not available. Please try later");
};

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../client/build", "index.html"));
});

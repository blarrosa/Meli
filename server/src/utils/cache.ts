import axios from "axios";
import NodeCache from "node-cache";

let client: NodeCache;

const getCacheClient = async () => {
  if (!client) {
    client = new NodeCache({ stdTTL: 100 });
  }
  return client;
};

const cachedQuery = async <T>(
  endpointURL: string,
  cacheKey: string,
  mapper: (data: any) => Promise<T>,
) => {
  const cacheClient = await getCacheClient();

  let response: any = cacheClient.get(cacheKey);

  if (!response) {
    const currencyResponse = mapper((await axios.get(endpointURL)).data);
    cacheClient.set(cacheKey, currencyResponse);
    response = currencyResponse;
  }
  return response;
};

export { getCacheClient, cachedQuery };

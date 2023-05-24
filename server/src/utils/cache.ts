import axios from "axios";
import NodeCache from "node-cache";

let client: NodeCache;

const getCacheClient = async () => {
  if (!client) {
    client = new NodeCache({ stdTTL: 100 });
  }
  return client;
};

const cachedQuery = async <T, K>(endpointURL: string, cacheKey: string, mapper: (data: K) => T) => {
  const cacheClient = await getCacheClient();

  let response = cacheClient.get<T>(cacheKey);

  if (!response) {
    const processedData = mapper((await axios.get(endpointURL)).data);
    cacheClient.set(cacheKey, processedData);
    response = processedData;
  }
  return response;
};

export { getCacheClient, cachedQuery };

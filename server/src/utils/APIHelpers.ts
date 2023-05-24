const MELI_BASE_URL = "https://api.mercadolibre.com";

export const API_ENDPOINTS = {
  search: ({ site }: getApiUrlParams, queryParams: URLSearchParams) =>
    `${getAPIURL({ site })}search?${queryParams}`,
  currencies: (currencyID: string) => `${getAPIURL()}/currencies/${currencyID}`,
  categories: (categoryID: string) => `${getAPIURL()}/categories/${categoryID}`,
  items: (id: string) => `${getAPIURL()}/items/${id}`,
  itemDescription: (id: string) => `${API_ENDPOINTS.items(id)}/description`,
} as const;

enum SITES {
  UY = "MLU",
  AR = "MLA",
}

interface getApiUrlParams {
  site: string;
}

export const getAPIURL = (props?: getApiUrlParams): string => {
  const { site } = props || {};

  if (site) {
    const siteID = Object.entries(SITES).find(([key]) => key === site)?.[1];

    if (!siteID) {
      throw new Error(`Site ${site} was not found. Impossible to handle the request`);
    }
    return `${MELI_BASE_URL}/sites/${siteID}/`;
  }

  return MELI_BASE_URL;
};

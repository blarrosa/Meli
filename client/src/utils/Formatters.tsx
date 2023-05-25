import { Fragment } from "react";

export interface Currency {
    decimals: number;
    id: string;
    symbol: string;
  }
  
 export const formatPrice = (
    price: number,
    priceDecimals: number,
    currency: Currency
  ) => {
    let formattedDecimals;
    if (`${priceDecimals}`.length > currency.decimals) {
      formattedDecimals = `${priceDecimals}`.slice(0, currency.decimals);
    } else {
      formattedDecimals = `${priceDecimals}`.padEnd(currency.decimals, "0");
    }
    return `${currency.symbol} ${price}.${formattedDecimals}`;
  };

  export const parseTextToComponent = (text: string) => (
    text.split('\n').map((normalText, index) => {
        return (
          <Fragment key={index}>
            {normalText}
            <br/>
          </Fragment>
        );
    })
  );
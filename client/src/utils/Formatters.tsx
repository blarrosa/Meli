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
    const formatter = new Intl.NumberFormat("es-UY", {
        style:"currency",
        currency: currency.id
    })

     return formatter.format(+[price,priceDecimals].join("."));
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
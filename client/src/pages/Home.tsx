import React from "react";
import Head from "../core/HeadComponent/Head";
import EmptyState from "../components/atoms/EmptyState/EmptyState";

export default function Home() {

  return (
      <>
        <Head>
          <title>{`Home | Mercadolibre`}</title>
        </Head>
          <EmptyState>
              Oops! No tenemos nada aquí todavía.
          </EmptyState>
      </>
  );
}

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usePDPContext} from "../core/Context/PDPContext";

import Product from "../components/Product/Product";
import ContainerComponent from "../components/ContainerComponent/ContainerComponent";
import Loader from "../components/atoms/Loader/Loader";
import Head from "../core/HeadComponent/Head";
import {ItemPDP} from "../../../types/API_Types";
import ItemNotFound from "./ItemNotFound";


export default function PDP() {
    const {id} = useParams();
    const {data, isLoading, error, searchItem, itemID} = usePDPContext();
    const {item, breadcrumb} = data;
    const [componentID, setComponentComponentID] = useState(id);

    useEffect(() => {
        if (id) {
            searchItem(id);
        }
    }, []);

    useEffect(() => {
        setComponentComponentID(itemID);
    }, [itemID]);

    if (isLoading || componentID !== itemID) return <Loader/>;
    if (error) {
        const {response} = error;
        if (response?.status === 404) {
            return <ItemNotFound item={itemID}/>
        }
        throw new Error(error);

    }

    return (
        <>
            <Head>
                <title>{`${item.title} | Mercadolibre`}</title>
                <script type="application/ld+json">{getJsonLD(item)}</script>
            </Head>
            <ContainerComponent breadcrumb={breadcrumb}>
                <Product item={item}/>
            </ContainerComponent>
        </>
    );
}


const getJsonLD = (item: ItemPDP) => (
    JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        description: item.description,
        name: item.title,
        image: item.picture.thumbnail,
        "offers": {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: `${item.price.amount}${item.price.decimals}`,
            priceCurrency: item.price.currency.id
        }
    })
)
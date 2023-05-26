import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usePDPContext} from "../core/Context/PDPContext";

import Product from "../components/Product/Product";
import ContainerComponent from "../components/ContainerComponent/ContainerComponent";
import Loader from "../components/atoms/Loader/Loader";
import Head from "../core/HeadComponent/Head";


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
    if (error) return <>Error</>;

    return (
        <>
            <Head>
                <title>{`${item.title} | Mercadolibre`}</title>
            </Head>
            <ContainerComponent breadcrumb={breadcrumb}>
                <Product item={item}/>
            </ContainerComponent>
        </>
    );
}

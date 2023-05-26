import {usePLPContext} from "../core/Context/PLPContext";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import ProductListCard from "../components/ProductListCard/ProductListCard";
import ContainerComponent from "../components/ContainerComponent/ContainerComponent";
import Loader from "../components/atoms/Loader/Loader";
import Head from "../core/HeadComponent/Head";


export default function PLP() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const {data, isLoading, error, searchItems, query} = usePLPContext();
    const {items, categories} = data;
    const qParam = searchParams.get("search");
    const [componentQuery, setComponentQuery] = useState(qParam);


    useEffect(() => {
        if (!qParam) {
            navigate("/");
            return;
        }
        searchItems(qParam);
    }, [qParam]);

    useEffect(() => {
        setComponentQuery(query);
    }, [query]);

    if (isLoading || componentQuery !== query) return <Loader/>;
    if (error) return <>Error</>;

    return (
        <>
            <Head>
                <title>{`Resultados de busqueda para: ${qParam} | Mercadolibre`}</title>
            </Head>
            <ContainerComponent breadcrumb={categories}>
                {items ? (
                    <ProductListCard items={items}/>
                ) : (
                    <>No items</>
                )}
            </ContainerComponent>
        </>
    );
}

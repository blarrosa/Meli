import Head from "../core/HeadComponent/Head";
import EmptyState from "../components/atoms/EmptyState/EmptyState";
import MagnifierIcon from "../components/atoms/Icons/MagnifierIcon";

interface Props {
    item: string;
}

export default function ItemNotFound(props: Props) {
    const {item} = props;
    return (
        <>
            <Head>
                <title>{`El articulo ${item} no fue encontrado.`}</title>
            </Head>
            <EmptyState>
                <MagnifierIcon/>
                Oops! No pudimos encontrar el articulo que estas buscando, vuelve a intentarlo.
            </EmptyState>
        </>
    );
}
import Head from "../core/HeadComponent/Head";
import EmptyState from "../components/atoms/EmptyState/EmptyState";
import MagnifierIcon from "../components/atoms/Icons/MagnifierIcon";

interface Props {
    search: string;
}

export default function SearchCriteriaNotFound(props: Props) {
    const {search} = props;
    return (
        <>
            <Head>
                <title>{`No se encontraron resultados para la busqueda: ${search}.`}</title>
            </Head>
            <EmptyState>
                <MagnifierIcon/>
                No hay publicaciones que coincidan con tu búsqueda.
            </EmptyState>
        </>
    );
}
import {Link} from "react-router-dom";
import NotFoundIcon from "../components/atoms/Icons/NotFoundIcon";
import EmptyState from "../components/atoms/EmptyState/EmptyState";
import Head from "../core/HeadComponent/Head";

export default function NotFoundPage() {
    return (
        <>
            <Head>
                <title>{"No se encontró la página que estabas buscando."}</title>
            </Head>
            <EmptyState>
                <NotFoundIcon/>
                <h3>Parece que esta página no existe</h3>
                <Link to="/">Ir a la página principal</Link>
            </EmptyState>
        </>
    )
}


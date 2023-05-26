import {PropsWithChildren} from "react";
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet-async";

export default function Head(props: PropsWithChildren) {
    const {children} = props;
    const {pathname} = useLocation();

    return (
        <Helmet>
            {/* The page language should be dynamic for accessibility purposes.*/}
            <html lang="es-UY"/>
            <meta name="description" content="Sitio ecommerce Mercadolibre"/>
            {children}
            <link rel="canonical" href={pathname}/>
        </Helmet>
    )
}
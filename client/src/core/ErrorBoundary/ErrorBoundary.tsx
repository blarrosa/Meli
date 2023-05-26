import React, {Component, ErrorInfo, ReactNode} from "react";
import EmptyState from "../../components/atoms/EmptyState/EmptyState";
import Head from "../HeadComponent/Head";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: State) {
        // @ts-ignore
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error): State {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <Head>
                        <title>{`Nuestros servidores estan experimentando algunos errores, vuelve a intentarlo luego | Mercadolibre`}</title>
                    </Head>
                    <EmptyState>
                        Oops! Nuestros servidores estan experimentando algunos errores, vuelve a intentarlo luego.
                    </EmptyState>
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
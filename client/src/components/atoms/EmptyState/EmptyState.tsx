import {PropsWithChildren} from "react";
import {Container, Stack} from "react-bootstrap";
import styles from "./EmptyState.module.scss";

export default function EmptyState(props: PropsWithChildren){
    const {children} = props;
    return (
        <Container className={styles.notFoundContainer}>
            <Stack gap={4}>
                {children}
            </Stack>
        </Container>
    );
}
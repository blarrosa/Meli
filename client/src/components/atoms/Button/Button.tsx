import { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface Props {
    variant: "primary" | "secondary" | "tertiary";
    ariaLabel?: string;
    type?: "submit" | "button";
    className?: string;
}

export default function Button (props: PropsWithChildren<Props>) {
    const {children, variant, ariaLabel, type = "button", className}  =props;

    return (
        <button type={type} aria-label={ariaLabel} className={classNames(styles.button,styles[variant],className)}>
            {children}
        </button>
    )
}
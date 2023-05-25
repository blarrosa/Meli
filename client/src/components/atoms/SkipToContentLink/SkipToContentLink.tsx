import classNames from "classnames";
import a11yStyles from "../../../core/Styles/A11yStyles.module.scss";
import styles from "./SkipToContentLink.module.scss"
import { SyntheticEvent } from "react";

interface Props{
    section: string;
}

export default function SkipToContentLink(props: Props){
    const {section} = props;

    const targetSection = `#${section}`;

    const onClick = (event: SyntheticEvent) => {
        event.preventDefault();

        const container: (HTMLElement | null) = document.querySelector(targetSection);
        
        if (container) {
            container.focus();
        }
    };

    return(
        <a href={targetSection} onClick={onClick} className={classNames(a11yStyles.visuallyHidden,styles.skipLink)}>{`Skip to ${section} section`}</a>
    );
}
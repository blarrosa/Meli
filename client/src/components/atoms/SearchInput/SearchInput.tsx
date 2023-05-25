import { FormEvent, useId, useRef } from "react";
import styles from "./SearchInput.module.scss"
import a11yStyles from "../../../core/Styles/A11yStyles.module.scss";
import classNames from 'classnames';
import SearchIcon from "../Icons/SearchIcon";


interface Props{
    label: string;
    labelVisuallyHidden?: boolean;
    placeholder?: string;
    onSearch: (value: string)=>void;
    value: string;
}

export default function SearchInput(props: Props){
    const {label, labelVisuallyHidden, placeholder, onSearch, value} = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const inputID = useId();

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const inputValue = inputRef.current?.value;
        if(inputValue){
            onSearch(inputValue);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleOnSubmit}>
            <label htmlFor={inputID} className={classNames(labelVisuallyHidden && a11yStyles.visuallyHidden)}>{label}</label>
            <input defaultValue={value} ref={inputRef} id={inputID} className={styles.input} placeholder={placeholder} autoComplete="off"/>
            <button type="submit" aria-label="Buscar" className={styles.button}>
                <SearchIcon/>
            </button>
        </form>
    );
}
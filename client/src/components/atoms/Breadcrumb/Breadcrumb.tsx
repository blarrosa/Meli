import styles from "./Breadcrum.module.scss";

interface Props{
    elements: string[];
}

export default function Breadcrumb(props: Props){
    const {elements} = props;
    
    if(!elements) return null;

  return (
    <div className={styles.breadcrumb}>
    {elements.map((element: string,i: number, arr: string[]) => (<span key={i}> {element} </span>))}
    </div>
  )
};

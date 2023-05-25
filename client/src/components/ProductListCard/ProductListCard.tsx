import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard';
import styles from "./ProductListCard.module.scss";
import {Item} from "../../../../types/API_Types";

interface Props{
items: Item[];
}

export default function ProductListCard(props: Props) {
    const {items} = props;
  return (
    <ListGroup variant="flush">
    {items.map((item, key: number) => (
      <Link  key={key} to={`${item.id}`} style={{ textDecoration: "none" }}>
        <ListGroup.Item className={styles.listCardItem}>
          <ProductCard item={item}/>
        </ListGroup.Item>
      </Link>
    ))}
  </ListGroup>
  )
}



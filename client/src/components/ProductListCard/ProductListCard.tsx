
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard';

interface Props{
items: any[];
}

export default function ProductListCard(props: Props) {
    const {items} = props;
  return (
    <ListGroup variant="flush">
    {items.map((item: any, key: number) => (
      <Link  key={key} to={`${item.id}`} style={{ textDecoration: "none" }}>
        <ListGroup.Item style={{ padding: "10px" }}>
          <ProductCard item={item}/>
        </ListGroup.Item>
      </Link>
    ))}
  </ListGroup>
  )
}



import { Col, Container, Row, Stack } from "react-bootstrap";

import Image from "../atoms/Image/Image";
import FreeShippingIcon from "../atoms/Icons/FreeShippingIcon";
import { formatPrice } from "../../utils/Formatters";
import {ItemPLP} from "../../../../types/API_Types";
import styles from "./ProductCard.module.scss";

interface Props {
  item: ItemPLP;
}
export default function ProductCard(props: Props) {
  const { item } = props;
  return (
    <Container>
      <Row className={styles.productCardContainer}>
        <Col
          md={"auto"}
          lg={"auto"}
          sm={12}
          className={styles.productCardImage}
        >
          <Image
            src={item.picture.thumbnail}
            alt={item.title}
            width="160px"
            height="160px"
          />
        </Col>
        <Col md={7} lg={8} sm={2}>
          <Stack gap={3}>
            <p>
              {formatPrice(
                item.price.amount,
                item.price.decimals,
                item.price.currency
              )}
              <span className={styles.freeShipping}>
                {item.free_shipping && (
                    <FreeShippingIcon height="16px" width="16px" />
                )}
              </span>
            </p>
            <p>{item.title}</p>
          </Stack>
        </Col>
        <Col>
          <p className={styles.productItemCity}> {item.city_name}</p>
        </Col>
      </Row>
    </Container>
  );
}

import { Col, Container, Row, Stack } from "react-bootstrap";

import Image from "../atoms/Image/Image";
import FreeShippingIcon from "../atoms/Icons/FreeShippingIcon";
import NewIcon from "../atoms/Icons/NewIcon";
import { formatPrice } from "../../utils/Formatters";

interface Props {
  item: any;
}
export default function ProductCard(props: Props) {
  const { item } = props;
  return (
    <Container>
      <Row style={{ alignItems: "center" }}>
        <Col
          md={"auto"}
          lg={"auto"}
          sm={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            src={item.picture.thumbnail}
            alt={item.title}
            width="160px"
            height="160px"
          />
        </Col>
        <Col md={8} lg={8} sm={2}>
          <Stack gap={3}>
            <div>
              {formatPrice(
                item.price.amount,
                item.price.decimals,
                item.price.currency
              )}
            </div>
            <div> {item.title}</div>
          </Stack>
        </Col>
        <Col>
          <Stack gap={3}>
            {item.free_shipping && (
              <span>
                <FreeShippingIcon height="24px" width="24px" />
                Free shipping
              </span>
            )}
            {item.condition === "new" && (
              <span>
                <NewIcon height="24px" width="24px" />
                New
              </span>
            )}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

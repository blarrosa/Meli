import Image from "../atoms/Image/Image";
import { formatPrice, parseTextToComponent } from "../../utils/Formatters";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Button from "../atoms/Button/Button";
import { useIsDesktop } from "../../hooks/useMediaQuery";
import {ItemPDP} from "../../../../types/API_Types";
import styles from "./Product.module.scss";

interface Props {
    item: ItemPDP
}

const getItemDescription = (item: any) => (
    <div>
      <h3 className={styles.productDescriptionTitle}>Descripción del producto</h3>
      <p>{parseTextToComponent(item.description)}</p>
    </div>
  );

  
export default function Product(props: Props) {
    const {item} = props;
    const isDesktop = useIsDesktop();

  return (
    <Container>
            <Row>
              <Col sm={8} md={8} lg={8}>
                <Stack gap={5}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={item.picture.thumbnail}
                      alt={item.title}
                      width="300px"
                      height="300px"
                    />
                  </div>
                  {isDesktop && getItemDescription(item)}
                </Stack>
              </Col>
              <Col>
                <Stack gap={2}>   
                  <span className={styles.additionalInfo}>
                    {item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                    {item.sold_quantity} Vendidos
                  </span>
                  <h2>{item.title}</h2>

                  <div className={styles.productPrice}>
                    {formatPrice(
                      item.price.amount,
                      item.price.decimals,
                      item.price.currency
                    )}
                  </div>
                  <Button variant={"primary"} className={styles.buyButton}>Comprar</Button>

                  {!isDesktop && getItemDescription(item)}
                </Stack>
              </Col>
            </Row>
          </Container>
  )
}



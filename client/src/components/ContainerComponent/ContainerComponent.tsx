import Breadcrumb from "../atoms/Breadcrumb/Breadcrumb";
import { PropsWithChildren } from "react";
import { Card } from "react-bootstrap";

interface ContainerProps {
  breadcrumb?: string[];
}

export default function ContainerComponent(
  props: PropsWithChildren<ContainerProps>
) {
  const { children, breadcrumb = [] } = props;

  return (
    <>
      {breadcrumb && <Breadcrumb elements={breadcrumb} />}
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </>
  );
}

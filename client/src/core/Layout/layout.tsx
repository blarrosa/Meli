import { Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";


export default function Layout() {
  return (
    <>
      <Header></Header>
      <Container style={{ height: "100vh" }}>
        <Col>
        <div id="main" tabIndex={-1}>
          <Outlet/>
        </div>
        </Col>
      </Container>
    </>
  );
}

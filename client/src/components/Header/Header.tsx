import { Col, Container, Navbar } from "react-bootstrap";
import logoDesktop from "../../imgs/logoDesktop.png";
import logoMobile from "../../imgs/logoMobile.svg";
import styles from "./Header.module.scss";
import { useIsDesktop } from "../../hooks/useMediaQuery";
import Image from "../atoms/Image/Image";
import SearchInput from "../atoms/SearchInput/SearchInput";
import SkipToContentLink from "../atoms/SkipToContentLink/SkipToContentLink";
import { Link, useNavigate } from "react-router-dom";
import { usePLPContext } from "../../core/Context/PLPContext";

const SiteLogo = {
  desktop:{
    height: '34px',
    width: '134px',
    src:logoDesktop
  },
  mobile:{
    height: '40px',
    width: '40px',
    src: logoMobile
  }
}



export default function Header() {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  const {query} =usePLPContext();

  const logoInfo = isDesktop ? SiteLogo.desktop : SiteLogo.mobile ;

  const handleSearch = (query: string)=>{
    const url = `/items?search=${query}`;
    navigate(url);
  };
  
  return (
    <header className={styles.header}>
      <SkipToContentLink section="main"/>
      <Navbar>
        <Container className={styles.container}>
          <Col lg="auto" md="auto">
            <Navbar.Brand>
            <Link to="/"><Image src={logoInfo.src} alt="Mercado libre logo" height={logoInfo.height} width={logoInfo.width}/></Link>
            </Navbar.Brand>
          </Col>
          <Col>
            <SearchInput value={query} onSearch={handleSearch}label="Ingresá lo que quieras encontrar" placeholder="Buscar productos, marcas y mas..." labelVisuallyHidden/>
          </Col>
        </Container>
      </Navbar>
    </header>
  );
}

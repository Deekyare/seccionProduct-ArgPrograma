import { Container, Nav, Navbar } from "react-bootstrap";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>De Hogar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
            <Nav.Link>
              Productos
            </Nav.Link>
            <Nav.Link>
              Sobre nosotros
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useSelector } from "react-redux";
function ColorSchemesExample() {
    const count = useSelector((state) => state.app.cart);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Its All About Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="nameproducts" to="/">Products</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nameproducts" to="/cart">Cart: {(count.length)}</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

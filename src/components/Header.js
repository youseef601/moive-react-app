import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  const numcart = useSelector((state) => state.fav.cart)
  return (
    <>
    <Navbar expand="lg"  style={{height:"60px",backgroundColor:"#00897b		"}}>
      <Container>
        <Link className='text-decoration-none text-dark' to="/">Movies</Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-decoration-none text-dark ms-3' to="/favourite">Favorites - {numcart.length}</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;
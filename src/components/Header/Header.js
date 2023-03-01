import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo2.png";

const Header = () => {
  let activeStyle = {
    borderRadius: "50px",
    color: "white",
    backgroundColor: "red",
  };
  return (
    <header className="sticky-top">
      <Navbar bg="light" variant="light">
        <Container>
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="brand" height="30" />
          </NavLink>
          <Nav className="ms-auto">
            <NavLink
              to="/login"
              className="nav-link px-3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="nav-link px-3"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Signup
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

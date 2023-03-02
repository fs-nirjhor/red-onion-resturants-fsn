import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo2.png";
import { connect } from "react-redux";
import { removeLoggedUser } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import {auth} from "../../firebaseConfig";

const Header = (props) => {
  const { cart, loggedUser, removeLoggedUser } = props;
  const activeStyle = {
    borderRadius: "20px",
    color: "white",
    backgroundColor: "red",
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.code);
      });
    removeLoggedUser();
  };
  return (
    <header className="sticky-top">
      <Navbar bg="light" variant="light">
        <Container>
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="brand" height="30" />
          </NavLink>
          <Nav className="ms-auto">
            <span className="nav-link mx-1">
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              <strong> {cart.length}</strong>
            </span>
            {!loggedUser.email ? (
              <>
                <NavLink
                  to="/login"
                  className="nav-link mx-1"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="nav-link mx-1"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Signup
                </NavLink>
              </>
            ) : (
              <>
                <strong className="nav-link mx-1">{loggedUser.name}</strong>
                <button
                  className="nav-link mx-1 btn"
                  style={activeStyle}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

const mapStateToProps = (state) => {
  return { loggedUser: state.loggedUser, cart: state.cart };
};
const mapDispatchToProps = { removeLoggedUser: removeLoggedUser };
export default connect(mapStateToProps, mapDispatchToProps)(Header);

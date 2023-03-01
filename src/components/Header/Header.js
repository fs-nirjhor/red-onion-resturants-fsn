import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo2.png";
import {connect} from "react-redux";
import {removeLoggedUser} from "../../redux/actions";

const Header = (props) => {
	const {loggedUser,removeLoggedUser} = props;
  const activeStyle = {
    borderRadius: "20px",
    color: "white",
    backgroundColor: "red",
  };
  const handleLogout = () => {
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
           { 
           !loggedUser.email ? 
           < >
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
            :
            < >
            <strong className="nav-link mx-1">{loggedUser.name}</strong>
             <button
              className="nav-link mx-1 btn"
              style={activeStyle}
              onClick = { handleLogout } >
              Logout
            </button>
            </>
           }
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

const mapStateToProps = (state) => {
	return {loggedUser: state.loggedUser} ;
};
const mapDispatchToProps = {removeLoggedUser:removeLoggedUser};
export default connect(mapStateToProps,mapDispatchToProps)(Header);

import { Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
return (
	<footer className="bg-dark p-4">
		<Row className="footer-list text-start">
		   <Col xs={4}>
		   <Link to="/">
		      <img src={logo} alt="logo" height={30}/>
		   </Link>
		   </Col>
		   <Col xs={4}>
		     <Link >About online food</Link>
		     <Link >Read our blog</Link>
		     <Link >Sign up deliver</Link>
		     <Link >Add your restaurant</Link>
		   </Col>
		   <Col xs={4}>
		     <Link >Get help</Link>
		     <Link >Read FAQs</Link>
		     <Link >View all cities</Link>
		     <Link >Restaurants near me</Link>
		   </Col>
		</Row>
		<Row className="p-3">
		<Col xs={12} md={6}>
		<p className="text-muted text-start">Copyright ©️ 2023 online food</p>
		</Col>
		<Col xs={12} md={6} className="footer-line text-end">
			<Link >Privacy Policy</Link>
			<Link >Terms of use</Link>
			<Link >Pricing</Link>
		</Col>
		</Row>
	</footer>
);
};

export default Footer;
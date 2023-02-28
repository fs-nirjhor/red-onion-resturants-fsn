import { Row, Col } from "react-bootstrap";
import breakfast1 from "../../images/breakfast/breakfast1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartItem = () => {
return (
	<Row className="cart-item py-3 my-3 rounded-4 background-whitesmoke">
		<Col xs={4}><img src={breakfast1} alt="item" className="img-fluid d-flex align-items-center"/></Col>
		<Col xs={4}>
		<p>Butter Naan</p>
		<h3 className="text-danger">$40</h3>
		<small className="text-muted">Delivery Free</small>
		</Col>
		<Col xs={4} className="d-flex align-items-center">
		<FontAwesomeIcon icon={faMinus} />
		<span className="fw-bold mx-2 p-2" style={{backgroundColor: "white"}}>02</span>
		<FontAwesomeIcon icon={faPlus} />
		</Col>
	</Row>
);
};

export default CartItem;
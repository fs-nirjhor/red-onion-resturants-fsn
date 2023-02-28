import UserInfo from "../UserInfo/UserInfo";
import Cart from "../Cart/Cart";
import { Row, Col } from "react-bootstrap";

const DeliveryDetails = () => {
return (
	<Row>
	<Col xs={12} md={6}>
		<UserInfo/>
	</Col>
	<Col >
	  <Cart/>
	</Col>
	</Row>
);
};

export default DeliveryDetails;
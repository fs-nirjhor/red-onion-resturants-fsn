import { useParams } from "react-router-dom";
import foodMenu from "../../data/foodMenu";
import { Row, Col, Button } from "react-bootstrap";
import "./Quantity.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const Quantity = () => {
	const {itemID} = useParams();
	const selectedItem = foodMenu.find(item => item.id === itemID);
	const {name, price, image} = selectedItem;
return (
	<Row>
	   <Col xs={{span: 12, order: 'last'}} md={{span: 6, order:"first"}}>
	      <h3>{name}</h3>
	      <p>Gay one the what walk then she Demesne mention promise you justice arrived way. Amazing foods are Or and increasing to in especially inquietude companions acceptance admiration Outweigh it families distance wandered ye!</p>
	      <div>
	      <span className="h4">${price} </span> 
	      <span className="rounded-pill border p-1 ms-2 py-1 px-3">
	      <FontAwesomeIcon icon={faMinus} /> 
	      <b className="mx-3">1</b>
	      <FontAwesomeIcon icon={faPlus}/>
	      </span> <br />
	      </div>
	      <Button variant="danger" size="sm" className="add-btn my-2">
	      <FontAwesomeIcon icon={faCartShopping} /> Add</Button>
	   </Col>
	   <Col xs={12} md={6} className="d-flex align-items-center py-3">
	     <img src={image} alt="food" className="img-fluid"/>
	   </Col>
	</Row>
);
};

export default Quantity;
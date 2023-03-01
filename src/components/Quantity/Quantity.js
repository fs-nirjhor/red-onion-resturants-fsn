import { useParams, useNavigate} from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import "./Quantity.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { increaseQuantity, decreaseQuantity, addToCart } from "../../redux/actions";

const Quantity = (props) => {
  const { cart, foodMenu, increaseQuantity, decreaseQuantity, addToCart} = props;
  const { itemID } = useParams();
  const navigate = useNavigate();
  const selectedItem = foodMenu.find((item) => item.id === itemID);
  const { name, price, image, quantity } = selectedItem;
  const handleAdd = () => {
  	addToCart(selectedItem);
  	navigate(-1);
  };
  return (
    <Row>
      <Col xs={{ span: 12, order: "last" }} md={{ span: 6, order: "first" }}>
        <h3>{name}</h3>
        <p>
          Gay one the what walk then she Demesne mention promise you justice
          arrived way. Amazing foods are Or and increasing to in especially
          inquietude companions acceptance admiration Outweigh it families
          distance wandered ye!
        </p>
        <div>
          <span className="h4">${price} </span>
          <span className="rounded-pill border p-1 ms-2 py-1 px-3">
            <FontAwesomeIcon icon={faMinus} onClick={() => decreaseQuantity(selectedItem)} />
            <b className="mx-3">{quantity}</b>
            <FontAwesomeIcon icon={faPlus} onClick={() => increaseQuantity(selectedItem)} />
          </span>
        </div>
        <Button variant="danger" size="sm" className="d-block add-btn my-2" onClick = {handleAdd}>
          <FontAwesomeIcon icon={faCartShopping} /> 
          Add
        </Button>
        <p>{cart.length}</p>
      </Col>
      <Col xs={12} md={6} className="d-flex align-items-center py-3">
        <img src={image} alt="food" className="img-fluid" />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return { 
  	cart: state.cart , 
  	foodMenu: state.foodMenu 
  }
};
const mapDispatchToProps = {
  increaseQuantity: increaseQuantity,
  decreaseQuantity: decreaseQuantity,
  addToCart: addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);

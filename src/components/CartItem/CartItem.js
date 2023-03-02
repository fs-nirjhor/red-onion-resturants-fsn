import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { increaseQuantity, decreaseQuantity, addToCart } from "../../redux/actions";

const CartItem = (props) => {
  const { item, cart, increaseQuantity, decreaseQuantity, addToCart } = props;
  const { image, name, quantity, price } = item;
  const cartItem = cart.find(food => food.id === item.id);
  const handleIncrease = () => {
  	increaseQuantity(cartItem);
  	addToCart(cartItem);
  };
  const handleDecrease = () => {
  	decreaseQuantity(cartItem);
  	addToCart(cartItem);
  };
  return (
    <Row className="cart-item py-3 my-3 rounded-4 background-whitesmoke">
      <Col xs={4}>
        <img
          src={image}
          alt="item"
          className="img-fluid d-flex align-items-center"
        />
      </Col>
      <Col xs={4}>
        <p>{name}</p>
        <h3 className="text-danger">${price}</h3>
        <small className="text-muted">
        Delivery {price >= 19.99 ? "Free" : "$2"}</small>
      </Col>
      <Col xs={4} className="d-flex align-items-center">
        <FontAwesomeIcon icon={faMinus} onClick={handleDecrease } />
        <span className="fw-bold mx-2 p-2" style={{ backgroundColor: "white" }}>
          {quantity}
        </span>
        <FontAwesomeIcon icon={faPlus} onClick={handleIncrease} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
	return {cart: state.cart};
};
const mapDispatchToProps = {
  increaseQuantity: increaseQuantity,
  decreaseQuantity: decreaseQuantity,
  addToCart: addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

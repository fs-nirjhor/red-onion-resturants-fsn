import CartItem from "../CartItem/CartItem";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Cart = (props) => {
  const { cart, pricing, deliveryInfo } = props;
  const { subtotal, tax, delivery, total } = pricing;

  const navigate = useNavigate();
  return (
    <section>
      <div>
        <p>
          From <strong>{deliveryInfo?.business}</strong>
        </p>
        <p>Arriving in 20-30 min</p>
        <p className="fw-bold">{deliveryInfo?.address}</p>
      </div>
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      <div>
        <p className="d-flex justify-content-between">
          <span>Subtotal • {cart.length} item</span>
          <span>${subtotal}</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Tax</span>
          <span>${tax}</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Delivery fee</span>
          <span>${delivery}</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Total</span>
          <span>${total}</span>
        </p>
      </div>
      <Button
        variant="secondary"
        className="w-100 will-disable-button"
        onClick={() => navigate("/location")} disabled = {deliveryInfo?.address ? false : true} >
        Place Order
      </Button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    pricing: state.pricing,
    deliveryInfo: state.deliveryInfo,
  };
};

export default connect(mapStateToProps)(Cart);

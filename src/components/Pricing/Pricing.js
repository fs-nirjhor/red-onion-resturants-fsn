
import { connect } from "react-redux";

const Pricing = (props) => {
	const {cart, pricing} = props;
	const { subtotal, tax, delivery, total } = pricing;
	
return (
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
);
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    pricing: state.pricing,
  };
};

export default connect(mapStateToProps)(Pricing);
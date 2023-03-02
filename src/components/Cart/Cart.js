import CartItem from "../CartItem/CartItem";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Pricing from "../Pricing/Pricing";

const Cart = (props) => {
  const { cart, deliveryInfo } = props;

  const navigate = useNavigate();
  return (
    <section>
      { deliveryInfo?.address && 
      <div>
        <p>
          From <strong>{deliveryInfo?.business}</strong>
        </p>
        <p>Arriving in 20-30 min</p>
        <p className="fw-bold">{deliveryInfo?.address}</p>
      </div>
      }
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      <Pricing/>
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
    deliveryInfo: state.deliveryInfo,
  };
};

export default connect(mapStateToProps)(Cart);

import CartItem from "../CartItem/CartItem";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const navigate = useNavigate();
return (
	<div>
		<p>From <b>Gulshan Plaza Restaura GPR</b></p>
		<p>Arriving in 20-30 min</p>
		<p>107 Rd No 8</p>
		<CartItem/>
		<CartItem/>
		<div>
			<p className="d-flex justify-content-between"> 
			<span>Subtotal • 4 item</span>
			<span>$320.00</span>
			</p>
			<p className="d-flex justify-content-between"> 
			<span>Tax</span>
			<span>$5.00</span>
			</p>
			<p className="d-flex justify-content-between"> 
			<span>Delivery fee</span>
			<span>$2.00</span>
			</p>
			<p className="d-flex justify-content-between"> 
			<span>Total</span>
			<span>$320.00</span>
			</p>
		</div>
		<Button variant="secondary" className="w-100 will-disable-button" undefined onClick = { () => navigate("/location") }
			>Place Order</Button>
	</div>
);
};

export default Cart;
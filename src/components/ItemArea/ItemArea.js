import Row from "react-bootstrap/Row";
import Items from "../Items/Items";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "./ItemArea.css";

const ItemArea = (props) => {
  const { defaultCategory, foodMenu, cart } = props;
  const { category } = useParams();
  const navigate = useNavigate();
  const displayCategory = category ? category : defaultCategory;
  const categoriesItem = foodMenu.filter(
    (item) => item.category === displayCategory
  );
 

  return (
    <div className="text-center">
      <Row className="g-4">
        {categoriesItem.map((food) => (
          <Items food={food} key={food.id} />
        ))}
      </Row>
      <Button
        variant="secondary"
        className="my-5 checkout-btn w-50 will-disable-button"
        onClick={() => navigate("/delivery-details")}
        disabled = {cart.length ? false : true}
      >
        Checkout Your Food
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { foodMenu: state.foodMenu, cart: state.cart };
};

export default connect(mapStateToProps)(ItemArea);

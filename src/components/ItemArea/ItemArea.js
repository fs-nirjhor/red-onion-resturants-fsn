import Row from "react-bootstrap/Row";
import foodMenu from "../../data/foodMenu";
import Items from "../Items/Items";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemArea.css";

const ItemArea = (props) => {
  const { defaultCategory } = props;
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
        undefined
      >
        Checkout Your Food
      </Button>
    </div>
  );
};

export default ItemArea;

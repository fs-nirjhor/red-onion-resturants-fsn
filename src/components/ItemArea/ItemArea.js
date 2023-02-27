import Row from 'react-bootstrap/Row';
import foodMenu from "../../data/foodMenu";
import Items from "../Items/Items";
import "./ItemArea.css";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemArea = (props) => {
	const {defaultCategory} = props;
	const {category} = useParams();
	const displayCategory = category ? category : defaultCategory;
	const categoriesItem = foodMenu.filter(item => item.category === displayCategory);
	
return (
	<div className="text-center">
	<Row className="g-4">
		{
			categoriesItem.map(food => <Items food={food} key={food.id}/>)
		}
	</Row>
	<Button variant="secondary" className="my-5 px-5 checkout-btn" onClick = { () => console.log("Checkout") }
		>Checkout Your Food</Button>
	</div>
);
};

export default ItemArea;
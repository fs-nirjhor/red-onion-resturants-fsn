import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./Items.css";
import { useNavigate } from "react-router-dom";

const Items = (props) => {
	const {food} = props;
	const {category, name, about, price, image, id} = food;
	const navigate = useNavigate();
	const handleClick = () => {
			navigate(`/${category}/${id}`);
	};
  return (
  	<Col xs={12} sm={6} md={4} onClick = {handleClick}>
  	<Card className="g-4 h-100 items">
      <Card.Img variant="top" src={image} className="p-4"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted">
          {about}
        </Card.Text>
      </Card.Body>
        <Card.Text as="h2">
        ${price}
        </Card.Text>
  	</Card>
  	</Col>
  );
}

export default Items;
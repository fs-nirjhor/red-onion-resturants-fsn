import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Abouts = (props) => {
	const {about} = props;
	const {title, details, image, icon} = about;
  return (
  	<Col xs={12} sm={6} md={4} >
  	<Card className="g-4 h-100 items">
      <Card.Img variant="top" src={image}/>
      <Card.Body className="row">
      <div className="col-3">
        <img src={icon} alt="icon"/>
      </div>
        <div className="col-9">
        <Card.Title >
        {title}</Card.Title>
        <Card.Text className="text-muted">
          {details}
        </Card.Text>
        <Link style={{textDecoration:"none"}}>See more</Link>
        </div>
      </Card.Body>
  	</Card>
  	</Col>
  );
}

export default Abouts;
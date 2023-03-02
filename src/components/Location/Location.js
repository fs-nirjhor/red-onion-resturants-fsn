import { Row, Col, Button } from "react-bootstrap";
import map from "../../images/map.png";
import biker from "../../images/Group 1151.png";
import raider from "../../images/Group 1152.png";
import "./Location.css";
import { connect } from "react-redux";

const Location = (props) => {
  const { deliveryInfo } = props;
  return (
    <Row>
      <Col xs={12} md={8} className="pe-md-5">
        <img src={map} alt="map" className="img-fluid" />
      </Col>
      <Col
        xs={12}
        md={4}
        className="rounded-4 background-whitesmoke d-flex align-content-around flex-wrap"
      >
        <img src={biker} alt="biker" className="img-fluid w-50 p-2" />
        <div className="rounded-4 background-white p-2 w-100">
          <h4>Your Location</h4>
          <p className="text-muted">{deliveryInfo?.address}</p>
          <h4>Shop Address</h4>
          <p className="text-muted">{deliveryInfo?.business}</p>
        </div>
        <div className="m-1 p-2">
          <h1>9:30</h1>
          <p className="text-muted">Estimate Delivery Time</p>
        </div>
        <Row className="rounded-4 background-white p-2 m-1">
          <Col xs={4}>
            <img src={raider} alt="raider" className="img-fluid h-100" />
          </Col>
          <Col xs={8}>
            <h4>Hamim</h4>
            <p className="text-muted">Your raider</p>
          </Col>
        </Row>
        <Button variant="danger" className="w-100 m-1">
          Contact
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return { deliveryInfo: state.deliveryInfo };
};
export default connect(mapStateToProps)(Location);

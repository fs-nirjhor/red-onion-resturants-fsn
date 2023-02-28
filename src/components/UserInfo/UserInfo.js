
import { Button, Form } from "react-bootstrap";

function UserInfo() {
  return (
  	<div >
    <Form className="my-form pe-5 mb-5">
        <Form.Control type="text" placeholder="Pickup point" />
        <Form.Control type="text" placeholder="Address" />
        <Form.Control type="text" placeholder="Flat, Suit or Floor" />
        <Form.Control type="text" placeholder="Business name" />
        <Form.Control as="textarea" className="form-textarea" placeholder="Add delivery instructions" rows={2} />
      <Button variant="secondary" type="submit" className="w-100" >
        Save &amp; Continue
      </Button>
    </Form>
  	</div>
  );
}

export default UserInfo;
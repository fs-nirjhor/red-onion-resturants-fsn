import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import {connect} from "react-redux";
import {addDeliveryInfo} from "../../redux/actions";

function UserInfo(props) {
	const {addDeliveryInfo} = props;
	const {register, handleSubmit, formState: { errors }} = useForm();
  
	const onSubmit = (data) => {
    addDeliveryInfo(data);
	};
	
  return (
  	<div >
    <Form className="my-form pe-md-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Control type="text" value="Deliver to door" placeholder="Pickup point" {...register("pickup")}/>
        
        <Form.Control type="text" placeholder="Address" {...register("address", { required: true })}/>
        {errors.address && <Form.Text>This field is required</Form.Text>}
        
        <Form.Control type="text" placeholder="Flat, Suit or Floor"  {...register("house", { required: true })}/>
        {errors.house && <Form.Text>This field is required</Form.Text>}
        
        <Form.Control type="text" placeholder="Business name" value="Khulna Plaza Restaura (KPR)" {...register("business", {required: true })}/>
        {errors.business && <Form.Text>This field is required</Form.Text>}
        
        <Form.Control as="textarea" className="form-textarea" placeholder="Add delivery instructions" rows={2}  {...register("name")}/>
        
      <Button variant="danger" type="submit" className="w-100" >
        Save &amp; Continue
      </Button>
    </Form>
  	</div>
  );
}

const mapDispatchToProps = {addDeliveryInfo:addDeliveryInfo};

export default connect(null,mapDispatchToProps)(UserInfo);
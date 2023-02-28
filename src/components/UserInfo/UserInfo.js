import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

function UserInfo() {
	const {register, handleSubmit, formState: { errors }} = useForm();
  
	const onSubmit = (data) => {
    console.log(data);
	};
	
  return (
  	<div >
    <Form className="my-form pe-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Control type="text" placeholder="Pickup point" {...register("pickup")}/>
        
        <Form.Control type="text" placeholder="Address"  {...register("address", { required: true })}/>
        {errors.address && <Form.Text>This field is required</Form.Text>}
        
        <Form.Control type="text" placeholder="Flat, Suit or Floor"  {...register("house", { required: true })}/>
        {errors.house && <Form.Text>This field is required</Form.Text>}
        
        <Form.Control type="text" placeholder="Business name"  {...register("business")}/>
        
        <Form.Control as="textarea" className="form-textarea" placeholder="Add delivery instructions" rows={2}  {...register("name")}/>
        
      <Button variant="danger" type="submit" className="w-100" >
        Save &amp; Continue
      </Button>
    </Form>
  	</div>
  );
}

export default UserInfo;
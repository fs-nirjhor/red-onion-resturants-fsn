import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import logo from "../../images/logo2.png";
import "./Login.css";

import app from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
	const auth = getAuth(app);
	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
    signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
  });
  };
return (
	<section className="my-form text-center mx-5 mb-5">
  	<img src={logo} alt="brand" className="w-100 p-5" />
  	 <Form onSubmit={handleSubmit(onSubmit)} className="px-5">

      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <Form.Text>This field is required</Form.Text>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <Form.Text>Please enter a valid email address</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: /^[a-zA-Z0-9]{6,16}$/,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <Form.Text>This field is required</Form.Text>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <Form.Text>
            Password must contain at least 6 to 16 characters.
          </Form.Text>
        )}
      </Form.Group>

      <Button variant="danger" type="submit" className="w-100">
        Signup
      </Button>
    </Form>
  	</section>
);
};

export default Login;
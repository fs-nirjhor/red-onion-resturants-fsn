import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import logo from "../../images/logo2.png";

import {auth} from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function Signup() {
	const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: data.name,
        });
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
      });
  };

  return (
    <section className="my-form text-center mx-md-5 mb-5">
      <img src={logo} alt="brand" className="w-100 p-5" />
      <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            {...register("name", { required: true, pattern: /^[a-zA-Z]{0,10}$/ })}
          />
          {errors.name && errors.name.type === "required" && (
            <Form.Text>This field is required</Form.Text>
          )}
          {errors.name && errors.name.type === "pattern" && (
            <Form.Text>Username must have 10 or less English letter</Form.Text>
          )}
        </Form.Group>

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

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <Form.Text>{errors.confirmPassword.message}</Form.Text>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <Form.Text>This field is required</Form.Text>
            )}
        </Form.Group>
        <p className="text-danger font-monospace ">{errorMessage}</p>
        <Button variant="danger" type="submit" className="w-100">
          Signup
        </Button>
      </Form>
      <Link to="/login" className="d-block mt-3 text-decoration-none text-danger">Already have an account?</Link>
    </section>
  );
}

export default Signup;

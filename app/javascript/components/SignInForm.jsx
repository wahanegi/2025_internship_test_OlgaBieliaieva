import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Formik } from "formik";
import { UserContext } from "./userContext";
import authService from "../services/authService";
import { PrimaryButtonReverse } from "./Buttons";

let initialValues = {
  email: "",
  password: "",
};

const SignInForm = ({ onClose }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const data = await authService.login(email, password);
      setUser(data.user);
      resetForm();
      onClose();
      navigate("/posts");

      // add notification
    } catch (error) {
      console.log(error);
      // add notification
      resetForm();
    }
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            id="sign-in-form"
            className="d-flex flex-column align-items-center justify-content-center gap-3 w-100"
            noValidate
            onSubmit={handleSubmit}
          >
            <FormGroup controlId="email" className="w-100">
              <FormControl
                type="email"
                name="email"
                value={values.email}
                className="form-control w-100 rounded-pill"
                placeholder="Email"
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
                onChange={handleChange}
              />
              <FormControl.Feedback type="invalid">
                {errors.email}
              </FormControl.Feedback>
            </FormGroup>
            <FormGroup controlId="password" className="w-100">
              <FormControl
                type="password"
                name="password"
                value={values.password}
                className="form-control w-100 rounded-pill"
                placeholder="Password"
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
                onChange={handleChange}
              />
              <FormControl.Feedback type="invalid">
                {errors.password}
              </FormControl.Feedback>
            </FormGroup>

            <PrimaryButtonReverse type="submit" text="Sign in" />
          </Form>
        )}
      </Formik>
    </>
  );
};
export default SignInForm;

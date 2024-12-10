import React from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import authService from "../services/authService";
import { PrimaryButtonReverse } from "./Buttons";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("It's not email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

let initialValues = {
  email: "",
  password: "",
};

const SignInForm = ({ onClose }) => {
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const data = await authService.login(email, password);
      resetForm();
      onClose();
      // add notification and redirect
    } catch (error) {
      console.log(error);
      // add notification
      resetForm();
    }
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            id="sign-up-form"
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

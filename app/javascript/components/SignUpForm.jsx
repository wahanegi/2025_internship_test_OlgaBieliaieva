import React from "react";
import { redirect } from "react-router-dom";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import authService from "../services/authService";
import { PrimaryButton } from "./Buttons";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be no more 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

let initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const SignUpForm = () => {
  
  const handleSubmit = async (
    { name, email, password, passwordConfirm },
    { resetForm }
  ) => {
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      return; // add notification
    }
    try {
      const data = await authService.register(
        name,
        email,
        password,
        passwordConfirm
      );
      resetForm();
      setUser(data.user);
      redirect("/posts"); // add notification and redirect
    } catch (error) {
      console.log(error);

      // add notification
      resetForm();
    }
  };

  return (
    <div className="p-1 w-100">
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
            <FormGroup controlId="name" className="w-100">
              <FormControl
                type="text"
                name="name"
                value={values.name}
                className="form-control w-100 rounded-pill"
                placeholder="Name"
                isInvalid={!!errors.name}
                isValid={touched.name && !errors.name}
                onChange={handleChange}
              />
              <FormControl.Feedback type="invalid">
                {errors.name}
              </FormControl.Feedback>
            </FormGroup>
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

            <FormGroup controlId="passwordConfirm" className="w-100">
              <FormControl
                type="password"
                name="passwordConfirm"
                value={values.passwordConfirm}
                className="form-control w-100 rounded-pill"
                placeholder="Confirm password"
                isValid={touched.passwordConfirm && !errors.passwordConfirm}
                isInvalid={!!errors.passwordConfirm}
                onChange={handleChange}
              />
              <FormControl.Feedback type="invalid">
                {errors.passwordConfirm}
              </FormControl.Feedback>
            </FormGroup>

            <PrimaryButton type="submit" text="Sign up" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignUpForm;

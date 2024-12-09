import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, FormControl, Toast } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const API_URL = "/users";
axios.defaults.headers.common["X-CSRF-Token"] =
  document.querySelector("[name=csrf-token]").content;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be no more 20 characters")
    .required("Name is required"),
  email: Yup.string().email("It's not email").required("Email is required"),
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
    const response = await axios.post(`${API_URL}`, {
      user: {
        name,
        email,
        password,
        password_confirmation: passwordConfirm,
      },
    });
    console.log(response.data);

    return response.data;
  };

  return (
    <section className="p-5">
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
            <button type="button" onClick={handleSubmit}>
              Sign up
            </button>

            {/* <SubmitFormButton type="submit" text="Create" /> */}
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default SignUpForm;

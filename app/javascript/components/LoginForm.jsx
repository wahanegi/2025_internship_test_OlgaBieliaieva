import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, FormControl, Toast } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const API_URL = "/users";
axios.defaults.headers.common["X-CSRF-Token"] =
  document.querySelector("[name=csrf-token]").content;

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

const LoginForm = () => {
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const response = await axios.post(`${API_URL}/sign_in`, {
      user: { email, password },
    });
    console.log(response.data);

    return response.data;
  };

  const handleLogout = async () => {
    await axios.delete(`${API_URL}/sign_out`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Auth Logout");
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
            id="login-form"
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

            <button type="button" onClick={handleSubmit}>
              Log in
            </button>
            <button type="button" onClick={handleLogout}>
              Log out
            </button>

            {/* <SubmitFormButton type="submit" text="Create" /> */}
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default LoginForm;

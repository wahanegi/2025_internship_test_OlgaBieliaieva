import React, { useState, useRef } from "react";
import { Form, FormGroup, FormControl, FloatingLabel } from "react-bootstrap";
import { Formik } from "formik";
import postService from "../services/postService";
import { PrimaryButtonReverse } from "./Buttons";
import { IoCameraOutline } from "react-icons/io5";

let initialValues = {
  media: "",
  body: "",
};

const NewPostForm = ({ onClose }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async ({ media, body }, { resetForm }) => {
    const formData = new FormData();
    formData.append("media", media);
    formData.append("body", body);

    try {
      const data = await postService.create(formData);
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          touched,
          errors,
        }) => (
          <Form
            id="new-post-form"
            className="d-flex flex-column align-items-center justify-content-center gap-3 w-100"
            noValidate
            onSubmit={handleSubmit}
          >
            <FormGroup controlId="media" className="w-100">
              {imagePreview ? (
                <div
                  className="w-100 container container-fluid d-flex flex-column align-items-center justify-content-center overflow-hidden p-0 m-0"
                  style={{ borderRadius: 30, cursor: "pointer" }}
                  onClick={handleImageClick}
                >
                  <img
                    src={imagePreview}
                    alt={imagePreview.name}
                    style={{
                      width: "100%",
                      maxHeight: 400,
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="w-100 container container-fluid d-flex flex-column align-items-center justify-content-center overflow-hidden px-0 py-4 m-0 border border-secondary-subtle"
                  style={{
                    width: "100%",
                    maxHeight: 400,
                    borderRadius: 30,
                    cursor: "pointer",
                    aspectRatio: "4 / 3",
                  }}
                  onClick={handleImageClick}
                >
                  <IoCameraOutline
                    style={{
                      width: "20%",
                      height: "20%",
                      strokeWidth: 1,
                      stroke: "#adb5bd",
                    }}
                  />
                </div>
              )}

              <FormControl
                type="file"
                name="media"
                className="form-control w-100"
                style={{
                  display: "none",
                }}
                ref={fileInputRef}
                isInvalid={!!errors.media}
                isValid={touched.media && !errors.media}
                onChange={(event) => {
                  setFieldValue("media", event.target.files[0]);
                  const imageUrl = URL.createObjectURL(event.target.files[0]);
                  setImagePreview(imageUrl);
                }}
              />

              <FormControl.Feedback type="invalid">
                {errors.media}
              </FormControl.Feedback>
            </FormGroup>
            <FormGroup controlId="body" className="w-100">
              <FloatingLabel
                id="new-post-body"
                controlId="body"
                label="What is happening?"
                className="w-100"
              >
                <FormControl
                  as="textarea"
                  name="body"
                  value={values.body}
                  className="form-control w-100 border-0 border-bottom rounded-0"
                  style={{
                    paddingRight: 68,
                  }}
                  placeholder="What is happening?"
                  isInvalid={!!errors.body}
                  isValid={touched.body && !errors.body}
                  onChange={handleChange}
                />
                <span
                  className="position-absolute fs-6 text-muted"
                  style={{ top: 20, right: 12 }}
                >
                  {values.body.length}/250
                </span>
              </FloatingLabel>
              <FormControl.Feedback type="invalid">
                {errors.body}
              </FormControl.Feedback>
            </FormGroup>

            <PrimaryButtonReverse type="submit" text="Post" />
          </Form>
        )}
      </Formik>
    </>
  );
};
export default NewPostForm;

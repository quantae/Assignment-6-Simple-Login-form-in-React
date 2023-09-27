import React, { useContext, useEffect } from "react";
import { Formik, Form, useField, useFormik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../../services/context/UserContext";

// style imports
import style from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div className={style.textInput_div}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function LoginForm() {
  // Declare variables
  const { userDetails, setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    try {
      await setUserDetails(user);
      setTimeout(() => {
       // alert(JSON.stringify(userDetails, null, 2));
        navigate("/welcome");
      }, 400)
      
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
 /** useEffect(() => {
    // Use useEffect to log userDetails when it changes
   // console.log("user details: ", userDetails);
   if (userDetails.user.firstName) {
        // Assuming that firstName is a required field, you can check it to verify that user details have been updated.
        setTimeout(() => {
          alert(JSON.stringify(userDetails, null, 2));
          navigate("/welcome");
          console.log('useDetails from useEffect: ', userDetails)
        }, 400);
    }
  }, [userDetails, navigate]); *//// Trigger the effect when userDetails changes


  return (
    <>
    <div className={style.login_container}>
        <h3 className={style.form_title}>Login</h3>
      <Formik
        initialValues={{
          firstName: userDetails.user ? userDetails.user.firstName: '',
          lastName: userDetails.user ? userDetails.user.lastName: '',
          email: userDetails.user ? userDetails.user.email: '',
          password: userDetails.user ? userDetails.user.password: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          password: Yup.string()
            .min(4, "Must be 4 characters or more")
            .required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Gerald"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Doe-Doe"
          />
          <TextInput
            label="Email"
            name="email"
            id="email"
            type="email"
            placeholder="gee@email.com"
          />
          <TextInput
            label="Password"
            name="password"
            id="password"
            type="password"
            placeholder="Not less than 4 characters"
          />
          <Button label="Login" type="submit" disabled={Formik.setSubmitting} />
        </Form>
      </Formik>
    </div>
    </>
    
  );
}

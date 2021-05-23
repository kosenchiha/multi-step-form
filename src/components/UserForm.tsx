import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Form, Formik } from "formik";
import { FC } from "react";
import { object, string } from "yup";

export interface FormValues {
  name: string;
  role: string;
  email: string;
  password: string;
}

interface UserFormProps {
  onFormSubmit: (values: FormValues) => void;
  initialValues: FormValues;
  isFormSubmitted: boolean;
}

const formValidationSchema = object().shape({
  name: string()
    .min(2, "Name should be at least 2 characters long")
    .required("Name is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .matches(/^(?=.*[A-Z])/, "Should contain at least one uppercase character")
    .matches(/^(?=.*[a-z])/, "Should contain at least one lowercase")
    .matches(/^(?=.*[0-9])/, "Should contain at least one number")
    .min(9, "Password should be at least 9 characters long")
    .required("Password is required"),
});

const UserForm: FC<UserFormProps> = ({
  onFormSubmit,
  initialValues,
  isFormSubmitted,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={(values: FormValues) => {
        onFormSubmit(values);
      }}
    >
      {({ values, touched, errors, handleBlur, handleChange }) => (
        <Form autoComplete="off">
          <TextField
            name="name"
            variant="outlined"
            placeholder="Enter Your Name"
            label="Name*"
            onChange={handleChange}
            value={values.name}
            margin="normal"
            fullWidth
            onBlur={handleBlur}
            helperText={errors.name && touched.name ? errors.name : null}
            error={!!(errors.name && touched.name)}
            disabled={isFormSubmitted}
          />

          <TextField
            variant="outlined"
            name="role"
            placeholder="Enter Your Role"
            label="Role"
            onChange={handleChange}
            value={values.role}
            margin="normal"
            fullWidth
            disabled={isFormSubmitted}
          />

          <TextField
            variant="outlined"
            placeholder="Enter Your Email"
            name="email"
            label="Email*"
            onChange={handleChange}
            value={values.email}
            margin="normal"
            fullWidth
            type="email"
            onBlur={handleBlur}
            helperText={errors.email && touched.email ? errors.email : null}
            error={!!(errors.email && touched.email)}
            disabled={isFormSubmitted}
          />

          <TextField
            variant="outlined"
            placeholder="Enter Your Password"
            name="password"
            label="Password*"
            onChange={handleChange}
            value={isFormSubmitted ? "********" : values.password}
            margin="normal"
            fullWidth
            onBlur={handleBlur}
            helperText={
              errors.password && touched.password ? errors.password : null
            }
            error={!!(errors.password && touched.password)}
            disabled={isFormSubmitted}
            type="password"
          />

          {!isFormSubmitted && (
            <Button
              color="primary"
              variant="contained"
              size="large"
              type="submit"
            >
              Submit
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;

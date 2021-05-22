import { Container } from "@material-ui/core";
import { FC } from "react";
import FormStepper from "../components/FormStepper";
import { formSteps } from "../steps";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Form, Formik } from "formik";
import { object, string } from "yup";

interface FormValues {
  name: string;
  role: string;
  email: string;
  password: string;
}

const formValidationSchema = object().shape({
  name: string()
    .min(2, "Name should be at least 2 characters long")
    .required("Name is required"),
  email: string()
    .email("Please provide a valid email")
    .required("Email is invalid"),
  password: string()
    .matches(/^(?=.*[A-Z])/, "Should contain at least one uppercase character")
    .matches(/^(?=.*[a-z])/, "Should contain at least one lowercase")
    .matches(/^(?=.*[0-9])/, "Should contain at least one number")
    .min(9, "Password should be at least 9 characters long")
    .required("Password is required"),
});

const User: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <FormStepper activeStep={0} completedSteps={[]} steps={formSteps} />
      <Formik
        initialValues={{
          name: "",
          role: "",
          email: "",
          password: "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values: FormValues) => {
          console.log(values);
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
            />

            <TextField
              variant="outlined"
              placeholder="Enter Your Password"
              name="password"
              label="Password*"
              onChange={handleChange}
              value={values.password}
              margin="normal"
              fullWidth
              onBlur={handleBlur}
              helperText={
                errors.password && touched.password ? errors.password : null
              }
              error={!!(errors.password && touched.password)}
            />

            <Button
              color="primary"
              variant="contained"
              size="large"
              type="submit"
            >
              Submit
            </Button>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default User;

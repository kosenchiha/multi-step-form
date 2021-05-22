import { Container } from "@material-ui/core";
import { FC } from "react";
import FormStepper from "../components/FormStepper";
import { formSteps } from "../steps";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Form, Formik } from "formik";

interface FormValues {
  name: string;
  role: string;
  email: string;
  password: string;
}

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
        onSubmit={(values: FormValues) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <TextField
              required
              name="name"
              variant="outlined"
              placeholder="Enter Your Name"
              label="Name"
              onChange={handleChange}
              value={values.name}
              margin="normal"
              fullWidth
              type="text"
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
              required
              variant="outlined"
              placeholder="Enter Your Email"
              name="email"
              label="Email"
              onChange={handleChange}
              value={values.email}
              margin="normal"
              fullWidth
              type="email"
            />

            <TextField
              required
              variant="outlined"
              placeholder="Enter Your Password"
              name="password"
              label="Password"
              onChange={handleChange}
              value={values.password}
              margin="normal"
              fullWidth
              type="password"
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

import { Container, Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FormStepper from "../components/FormStepper";
import { StepsStateI } from "../redux/stepsReducer";
import { RootStore } from "../redux/store";
import { formSteps } from "../steps";
import { Form, Formik } from "formik";
import { addStep } from "../redux/stepsActions";
import { addUserConsent } from "../redux/userActions";
import { urls } from "../routes/urls";
import { UserStateI } from "../redux/userReducer";
import Navigation from "../components/Navigation";

const Privacy: FC = () => {
  const activeStep = 1;
  const dispatch = useDispatch();
  const history = useHistory();
  const { steps: completedSteps } = useSelector<RootStore, StepsStateI>(
    (state) => state.stepsState
  );
  const { userConsent } = useSelector<RootStore, UserStateI>(
    (state) => state.userState
  );
  const isStepCompleted = completedSteps.includes(activeStep);

  return (
    <Container component="main" maxWidth="xs">
      <FormStepper
        activeStep={1}
        completedSteps={completedSteps}
        steps={formSteps}
      />
      <Navigation
        isStepCompleted={isStepCompleted}
        goNextTo={urls.done}
        goBackTo={urls.user}
      />

      <Formik
        initialValues={userConsent}
        onSubmit={(values) => {
          !isStepCompleted && dispatch(addStep(activeStep));
          dispatch(addUserConsent(values));
          history.push(urls.done);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Box paddingY={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="email"
                    color="primary"
                    onChange={handleChange}
                    checked={values.email}
                  />
                }
                label="Receive updates about Tray.io product by email"
              />
            </Box>
            <Box paddingBottom={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="phone"
                    color="primary"
                    onChange={handleChange}
                    checked={values.phone}
                  />
                }
                label="Receive communication by phone for other products created by the Tray.io team"
              />
            </Box>

            <Button
              color="primary"
              variant="contained"
              size="large"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Privacy;

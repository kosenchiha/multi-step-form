import { Container, Box } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FormStepper from "../components/FormStepper";
import { FormStatus } from "../redux/formProgressReducer";
import { formSteps } from "../steps";
import { Form, Formik } from "formik";
import { completeStep } from "../redux/formProgressActions";
import { addUserConsent } from "../redux/userActions";
import { urls } from "../routes/urls";
import Navigation from "../components/Navigation";
import { RestartBtn } from "../components/RestartBtn";
import { selectUserConcent } from "../redux/userSelectors";
import { selectFormProgress } from "../redux/formProgressSelectors";

const Privacy: FC = () => {
  const activeStep = 1;
  const dispatch = useDispatch();
  const history = useHistory();
  const { completedSteps, formStatus } = useSelector(selectFormProgress);
  const userConsent = useSelector(selectUserConcent);
  const isStepCompleted = completedSteps.includes(activeStep);
  const isFormSubmitted = formStatus === FormStatus.Submitted;

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
          !isStepCompleted && dispatch(completeStep(activeStep));
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
                    disabled={isFormSubmitted}
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
                    disabled={isFormSubmitted}
                    name="phone"
                    color="primary"
                    onChange={handleChange}
                    checked={values.phone}
                  />
                }
                label="Receive communication by phone for other products created by the Tray.io team"
              />
            </Box>

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
      {formStatus === FormStatus.Submitted && <RestartBtn />}
    </Container>
  );
};

export default Privacy;

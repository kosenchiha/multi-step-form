import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FormStepper from "../components/FormStepper";
import { completeStep, submitForm } from "../redux/formProgressActions";
import { FormStatus, FormProgressStateI } from "../redux/formProgressReducer";
import { RootStore } from "../redux/store";
import { urls } from "../routes/urls";
import { formSteps } from "../steps";
import DoneOutlineSharpIcon from "@material-ui/icons/DoneOutlineSharp";
import Typography from "@material-ui/core/Typography";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Grid from "@material-ui/core/Grid";
import { RestartBtn } from "../components/RestartBtn";
import { Box } from "@material-ui/core";

const Done: FC = () => {
  const activeStep = 2;
  const dispatch = useDispatch();
  const history = useHistory();
  const { completedSteps, formStatus } = useSelector<
    RootStore,
    FormProgressStateI
  >((state) => state.formProgressState);
  const { userState } = useSelector<RootStore, RootStore>((state) => state);

  const isFormCompleted = formStatus === FormStatus.Submitted;

  useEffect(() => {
    if (completedSteps.length === 2 && !isFormCompleted) {
      dispatch(completeStep(activeStep));
      dispatch(submitForm());
      console.log(userState);
    }
  }, [completedSteps.length, userState]);

  return (
    <Container component="main" maxWidth="xs">
      <FormStepper
        activeStep={activeStep}
        completedSteps={completedSteps}
        steps={formSteps}
      />

      <Button
        size="large"
        startIcon={<ChevronLeft />}
        onClick={() => history.push(urls.privacy)}
      >
        Back
      </Button>

      {!isFormCompleted && (
        <Box marginTop={2}>
          <Typography align="center" color="primary">
            Sorry, You haven't completed all steps yet
          </Typography>
        </Box>
      )}

      {isFormCompleted && (
        <>
          <Grid container spacing={4} direction="column">
            <Grid item></Grid>
            <Grid item>
              <Typography align="center">
                <DoneOutlineSharpIcon fontSize="large" color="primary" />
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="h6">
                Please, verify your email address, you should have received an
                email from us already!
              </Typography>
            </Grid>
          </Grid>
          <RestartBtn />
        </>
      )}
    </Container>
  );
};

export default Done;

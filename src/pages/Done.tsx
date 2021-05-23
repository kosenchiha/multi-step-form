import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FormStepper from "../components/FormStepper";
import { addStep, submitForm } from "../redux/stepsActions";
import { FormStatus, StepsStateI } from "../redux/stepsReducer";
import { RootStore } from "../redux/store";
import { urls } from "../routes/urls";
import { formSteps } from "../steps";
import DoneOutlineSharpIcon from "@material-ui/icons/DoneOutlineSharp";
import Typography from "@material-ui/core/Typography";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Grid from "@material-ui/core/Grid";
import RestartBtn from "../components/RestartBtn";

const Done: FC = () => {
  const activeStep = 2;
  const dispatch = useDispatch();
  const history = useHistory();
  const { steps: completedSteps, formStatus } = useSelector<
    RootStore,
    StepsStateI
  >((state) => state.stepsState);
  const { userState } = useSelector<RootStore, RootStore>((state) => state);

  useEffect(() => {
    if (completedSteps.length === 2) {
      dispatch(addStep(activeStep));
    }
  }, []);

  useEffect(() => {
    if (completedSteps.length === 3 && formStatus !== FormStatus.Submitted) {
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
      <Grid container spacing={4} direction="column">
        <Grid item>
          <Button
            size="large"
            startIcon={<ChevronLeft />}
            onClick={() => history.push(urls.privacy)}
          >
            Back
          </Button>
        </Grid>
        <Grid item>
          <Typography align="center">
            <DoneOutlineSharpIcon fontSize="large" color="primary" />
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h6">
            Please, verify your email address, you should have received an email
            from us already!
          </Typography>
        </Grid>
      </Grid>
      {formStatus === FormStatus.Submitted && <RestartBtn />}
    </Container>
  );
};

export default Done;

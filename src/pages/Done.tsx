import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FormStepper from "../components/FormStepper";
import { addStep } from "../redux/stepsActions";
import { StepsStateI } from "../redux/stepsReducer";
import { RootStore } from "../redux/store";
import { urls } from "../routes/urls";
import { formSteps } from "../steps";

const Done: FC = () => {
  const activeStep = 2;
  const dispatch = useDispatch();
  const history = useHistory();
  const { steps: completedSteps } = useSelector<RootStore, StepsStateI>(
    (state) => state.stepsState
  );
  const { userState } = useSelector<RootStore, RootStore>((state) => state);

  useEffect(() => {
    if (completedSteps.length === 2) {
      dispatch(addStep(activeStep));
    }
  }, []);

  useEffect(() => {
    if (completedSteps.length === 3) {
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
      <Button size="large" onClick={() => history.push(urls.privacy)}>
        Back
      </Button>
      <p>Done!</p>
    </Container>
  );
};

export default Done;

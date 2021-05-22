import { Container } from "@material-ui/core";
import { FC } from "react";
import FormStepper from "../components/FormStepper";
import { formSteps } from "../steps";

const Done: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <FormStepper activeStep={2} completedSteps={[]} steps={formSteps} />
      <p>Done!</p>
    </Container>
  );
};

export default Done;

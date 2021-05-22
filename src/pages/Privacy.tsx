import { Container } from "@material-ui/core";
import { FC } from "react";
import FormStepper from "../components/FormStepper";
import { formSteps } from "../steps";

const Privacy: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <FormStepper activeStep={1} completedSteps={[]} steps={formSteps} />
      <p>Privacy page</p>
    </Container>
  );
};

export default Privacy;

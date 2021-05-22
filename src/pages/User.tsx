import { Container } from "@material-ui/core";
import { FC } from "react";
import FormStepper from "../components/FormStepper";
import { formSteps } from "../steps";

const User: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <FormStepper activeStep={0} completedSteps={[]} steps={formSteps} />
      <p>User page</p>
    </Container>
  );
};

export default User;

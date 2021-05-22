import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { FC } from "react";

interface FormStepperProps {
  steps: string[];
  activeStep: number;
  completedSteps: number[];
}

const FormStepper: FC<FormStepperProps> = ({
  steps,
  activeStep = 0,
  completedSteps = [],
}) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label, index) => (
        <Step key={label} completed={completedSteps.includes(index)}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
export default FormStepper;

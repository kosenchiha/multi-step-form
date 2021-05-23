import Container from "@material-ui/core/Container";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FormStepper from "../components/FormStepper";
import { FormStatus } from "../redux/formProgressReducer";
import { formSteps } from "../steps";
import { completeStep } from "../redux/formProgressActions";
import { addUserConsent, UserConsentI } from "../redux/userActions";
import { urls } from "../routes/urls";
import Navigation from "../components/Navigation";
import { RestartBtn } from "../components/RestartBtn";
import { selectUserConcent } from "../redux/userSelectors";
import { selectFormProgress } from "../redux/formProgressSelectors";
import PrivacyConsentForm from "../components/PrivacyConsentForm";

const Privacy: FC = () => {
  const activeStep = 1;
  const dispatch = useDispatch();
  const history = useHistory();
  const { completedSteps, formStatus } = useSelector(selectFormProgress);
  const userConsent = useSelector(selectUserConcent);
  const isStepCompleted = completedSteps.includes(activeStep);
  const isFormSubmitted = formStatus === FormStatus.Submitted;

  const onFormSubmit = (values: UserConsentI) => {
    !isStepCompleted && dispatch(completeStep(activeStep));
    dispatch(addUserConsent(values));
    history.push(urls.done);
  };

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
      <PrivacyConsentForm
        userConsent={userConsent}
        isFormSubmitted={isFormSubmitted}
        onFormSubmit={onFormSubmit}
      />
      {isFormSubmitted && <RestartBtn />}
    </Container>
  );
};

export default Privacy;

import { FC } from "react";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { completeStep } from "../redux/formProgressActions";
import { addUserInfo } from "../redux/userActions";
import { useHistory } from "react-router-dom";
import { urls } from "../routes/urls";
import { RootStore } from "../redux/store";
import { FormStatus, FormProgressStateI } from "../redux/formProgressReducer";
import { UserStateI } from "../redux/userReducer";
import FormStepper from "../components/FormStepper";
import Navigation from "../components/Navigation";
import { formSteps } from "../steps";
import UserForm from "../components/UserForm";
import { FormValues } from "../components/UserForm";
import { RestartBtn } from "../components/RestartBtn";
import { selectUserInfo } from "../redux/userSelectors";
import { selectFormProgress } from "../redux/formProgressSelectors";

const User: FC = () => {
  const activeStep = 0;
  const dispatch = useDispatch();
  const history = useHistory();
  const { completedSteps, formStatus } = useSelector(selectFormProgress);
  const userInfo = useSelector(selectUserInfo);
  const isStepCompleted = completedSteps.includes(activeStep);
  const isFormSubmitted = formStatus === FormStatus.Submitted;

  const handleUserFormSubmit = (values: FormValues) => {
    !isStepCompleted && dispatch(completeStep(activeStep));
    dispatch(addUserInfo(values));
    history.push(urls.privacy);
  };

  return (
    <Container component="main" maxWidth="xs">
      <FormStepper
        activeStep={activeStep}
        completedSteps={completedSteps}
        steps={formSteps}
      />
      <Navigation isStepCompleted={isStepCompleted} goNextTo={urls.privacy} />
      <UserForm
        initialValues={userInfo as FormValues}
        onFormSubmit={handleUserFormSubmit}
        isFormSubmitted={isFormSubmitted}
      />
      {isFormSubmitted && <RestartBtn />}
    </Container>
  );
};

export default User;

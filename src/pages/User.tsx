import { FC } from "react";
import Container from "@material-ui/core/Container";

import { useDispatch, useSelector } from "react-redux";
import { addStep } from "../redux/stepsActions";
import { addUserInfo, UserInfoI } from "../redux/userActions";
import { useHistory } from "react-router-dom";
import { urls } from "../routes/urls";
import { RootStore } from "../redux/store";
import { FormStatus, StepsStateI } from "../redux/stepsReducer";
import { UserStateI } from "../redux/userReducer";
import FormStepper from "../components/FormStepper";
import Navigation from "../components/Navigation";
import { formSteps } from "../steps";
import UserForm from "../components/UserForm";
import { FormValues } from "../components/UserForm";
import RestartBtn from "../components/RestartBtn";

const User: FC = () => {
  const activeStep = 0;
  const dispatch = useDispatch();
  const history = useHistory();
  const { steps: completedSteps, formStatus } = useSelector<
    RootStore,
    StepsStateI
  >((state) => state.stepsState);
  const { userInfo } = useSelector<RootStore, UserStateI>(
    (state) => state.userState
  );

  const isStepCompleted = completedSteps.includes(activeStep);

  const handleUserFormSubmit = (values: FormValues) => {
    !isStepCompleted && dispatch(addStep(activeStep));
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
        isFormSubmitted={formStatus === FormStatus.Submitted}
      />
      {formStatus === FormStatus.Submitted && <RestartBtn />}
    </Container>
  );
};

export default User;

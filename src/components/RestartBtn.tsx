import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { resetStepState } from "../redux/stepsActions";
import { resetUserState } from "../redux/userActions";
import { urls } from "../routes/urls";

const RestartBtn: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Grid container spacing={4} justify="center">
      <Box margin={4}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            dispatch(resetStepState());
            dispatch(resetUserState());
            history.push(urls.user);
          }}
        >
          Restart
        </Button>
      </Box>
    </Grid>
  );
};

export default RestartBtn;

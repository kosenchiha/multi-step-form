import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { resetStepState } from "../redux/formProgressActions";
import { resetUserState } from "../redux/userActions";
import { urls } from "../routes/urls";

export const RestartBtn: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  return (
    <Grid container spacing={4} justify="center">
      <Box margin={4}>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={async () => {
            await dispatch(resetStepState());
            await dispatch(resetUserState());
            location.pathname === urls.user
              ? window.location.reload()
              : history.push(urls.user);
          }}
        >
          Restart
        </Button>
      </Box>
    </Grid>
  );
};

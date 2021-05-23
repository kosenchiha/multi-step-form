import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { FC } from "react";
import { useHistory } from "react-router";

interface NavigationProps {
  isStepCompleted: boolean;
  goNextTo: string;
  goBackTo?: string;
}

const Navigation: FC<NavigationProps> = ({
  isStepCompleted,
  goNextTo,
  goBackTo,
}) => {
  const history = useHistory();
  return (
    <>
      <Grid container justify="space-between">
        {goBackTo && (
          <Button
            size="large"
            onClick={() => history.push(goBackTo)}
            startIcon={<ChevronLeft />}
          >
            Back
          </Button>
        )}
        {isStepCompleted && (
          <Button
            size="large"
            onClick={() => history.push(goNextTo)}
            endIcon={<ChevronRight />}
          >
            Next
          </Button>
        )}
      </Grid>

      {isStepCompleted && (
        <Box marginTop={2}>
          <Typography variant="body2" align="center" color="primary">
            You've already completed this step. You can proceed next or resubmit
            your data
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Navigation;

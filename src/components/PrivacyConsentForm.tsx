import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Form, Formik } from "formik";
import { UserConsentI } from "../redux/userActions";
import { FC } from "react";

interface PrivacyConsentFormProps {
  onFormSubmit: (values: UserConsentI) => void;
  isFormSubmitted: boolean;
  userConsent: UserConsentI;
}

const PrivacyConsentForm: FC<PrivacyConsentFormProps> = ({
  onFormSubmit,
  userConsent,
  isFormSubmitted,
}) => {
  return (
    <Formik
      initialValues={userConsent}
      onSubmit={(values) => onFormSubmit(values)}
    >
      {({ values, handleChange }) => (
        <Form>
          <Box paddingY={2}>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={isFormSubmitted}
                  name="email"
                  color="primary"
                  onChange={handleChange}
                  checked={values.email}
                />
              }
              label="Receive updates about Tray.io product by email"
            />
          </Box>
          <Box paddingBottom={4}>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={isFormSubmitted}
                  name="phone"
                  color="primary"
                  onChange={handleChange}
                  checked={values.phone}
                />
              }
              label="Receive communication by phone for other products created by the Tray.io team"
            />
          </Box>

          {!isFormSubmitted && (
            <Button
              color="primary"
              variant="contained"
              size="large"
              type="submit"
            >
              Submit
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default PrivacyConsentForm;

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const stepFromQuery = parseInt(querySearch.get("step")) || 0;
  
  const [activeStep, setActiveStep] = React.useState(stepFromQuery);

  // Update activeStep whenever the query parameter changes
  React.useEffect(() => {
    const updatedStep = parseInt(querySearch.get("step")) || 0;
    setActiveStep(updatedStep);
  }, [location.search]);

  const handleNext = () => {
    const nextStep = activeStep + 1;

    if (nextStep < steps.length) {
      setActiveStep(nextStep);
      navigate(`?step=${nextStep}`);
    } else {
      setActiveStep(nextStep);
      // Remove the step parameter when going beyond the last step
      navigate(location.pathname);
    }
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    if (prevStep >= 0) {
      setActiveStep(prevStep);
      navigate(`?step=${prevStep}`);
    }
  };

  return (
    <div className='px-10 lg:px-20 mt-12'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              {/* <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}

            </Box>

            <div className='mt-10'>
              {stepFromQuery==2?<DeliveryAddressForm/>:<OrderSummary/>}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}

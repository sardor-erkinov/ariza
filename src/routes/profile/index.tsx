import { Button, Container, Group, Stepper } from '@mantine/core';
import { useState } from 'react';
import { useStyles } from './profile.styles';

const ApplicationSteps = () => {
  const [active, setActive] = useState(1);
  const { classes } = useStyles();
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className={classes.wrapper}>
      <Container className={classes.topContainer} size={'lg'}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step
            label="First step"
            description="Create an account"
            allowStepSelect={active > 0}
          >
            Step 1 content: Create an account
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Verify email" allowStepSelect={active > 1}>
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step
            label="Final step"
            description="Get full access"
            allowStepSelect={active > 2}
          >
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Step
            label="Final step"
            description="Get full access"
            allowStepSelect={active > 3}
          >
            Step 4 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Container>
      <Container mt={30} p={'1.5rem !important'} className={classes.btmContainer} size={'lg'}>
        <Group position={active !== 1 ? 'apart' : 'right'}>
          {active !== 1 && (
            <Button size="lg" variant="default" onClick={prevStep}>
              Orqaga
            </Button>
          )}
          <Button size="lg" onClick={nextStep}>
            Keyingi qadam
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default ApplicationSteps;

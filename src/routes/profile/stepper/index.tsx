import { Button, Container, Group, Stepper, Title } from '@mantine/core';
import { Dispatch, SetStateAction, useState } from 'react';
import FirstStep from './first-step';
import SecondStep from './second-step';
import { useStyles } from './stepper.styles';

interface AddStepperProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const AppStepper = ({ active, setActive }: AddStepperProps) => {
  const { classes } = useStyles();
  return (
    <Stepper
      color={'dark'}
      classNames={{
        content: classes.content,
        root: classes.root,
        step: classes.step,
        separator: classes.separator,
        separatorActive: classes.separatorActive,
        stepBody: classes.stepBody,
        stepCompleted: classes.stepCompleted,
        stepCompletedIcon: classes.stepCompletedIcon,
        stepDescription: classes.stepDescription,
        stepIcon: classes.stepIcon,
        stepLabel: classes.stepLabel,
        stepLoader: classes.stepLoader,
        stepProgress: classes.stepProgress,
        steps: classes.steps,
      }}
      active={active}
      onStepClick={setActive}
      breakpoint="sm"
    >
      <Stepper.Step label="Shaxsiy ma'lumotlar" allowStepSelect={active > 0}>
        <FirstStep />
      </Stepper.Step>
      <Stepper.Step label="Tugatgan ta‘lim muassasasi" allowStepSelect={active > 1}>
        <SecondStep />
      </Stepper.Step>
      <Stepper.Step label="Mutaxassislikni tanlash" allowStepSelect={active > 2}>
        <SecondStep title="Mutaxassislikni tanlash" />
      </Stepper.Step>
      <Stepper.Step label="Imtiyozlarni kiritish" allowStepSelect={active > 3}>
        <SecondStep title="Imtiyozlarni kiritish" />
      </Stepper.Step>
      <Stepper.Completed>
        <Title mb={250} sx={(theme) => ({ color: theme.colors.green[5] })} order={3}>
          Muvaffaqiyatli yakunlandi!
        </Title>
      </Stepper.Completed>
    </Stepper>
  );
};

export default AppStepper;

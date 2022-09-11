import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _param, getRef) => ({
  wrapper: {
    width: '100%',
    height: 'calc(100vh - 99px)',
    background: '#f2f3f7',
  },
  btmContainer: {
    padding: '1.5rem',
    borderRadius: '0.5rem',
    background: theme.colorScheme === 'light' ? 'white' : 'transparent',
  },
  topContainer: {
    padding: '1.5rem',
    borderRadius: '0.5rem',
    background: theme.colorScheme === 'light' ? 'white' : 'transparent',
  },

  container: {
    padding: '1.5rem',
    borderRadius: '0.5rem',
    background: theme.colorScheme === 'light' ? 'white' : 'transparent',
  },
  content: {
    marginTop: '30px !important',
    margin: '0 auto',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    background: theme.colorScheme === 'light' ? 'white' : 'transparent',
  },
  root: { maxWidth: '1140px', width: '100%', margin: '0 auto' },
  step: {
    position: 'relative',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    background: theme.colorScheme === 'dark' ? 'transparent' : 'white',
    border: `1px solid ${theme.colors.gray[4]}`,
  },
  separator: {
    background: theme.colorScheme === 'dark' ? 'white' : theme.colors.gray[3],
  },
  separatorActive: {
    background: theme.colorScheme === 'dark' ? 'grey' : '#2bb76b',
  },
  stepBody: {
    // background: 'red',
    position: 'relative',
  },
  stepCompleted: {
    border: `1px solid ${theme.colors.green[4]}`,
    background: 'rgb(234, 248, 241)',
  },
  stepCompletedIcon: {
    background: '#2bb76b',
    border: '2px solid green',
    top: '-3px',
    left: '-3px',
    width: '44px',
    height: '44px',
    position: 'absolute',
    borderRadius: '50%',
  },
  stepDescription: {},
  stepIcon: {
    ref: getRef('stepIcon'),
  },
  stepLabel: {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 400,
  },
  stepLoader: {},
  stepProgress: {
    color: theme.colors.blue[7],
    background: theme.colors.blue[1],
    border: `1px solid ${theme.colors.blue[5]}`,
  },
  steps: {
    width: '100%',
    [theme.fn.smallerThan('md')]: {
      padding: '0 20px',
    },
  },
}));

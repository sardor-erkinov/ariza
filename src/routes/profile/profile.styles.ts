import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100% ',
    background: theme.colorScheme === 'dark' ? theme.colors.dark[4] : '#f2f3f7',
    [theme.fn.smallerThan('md')]: {
      padding: '0 20px',
      height: '100% !important',
    },
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
}));

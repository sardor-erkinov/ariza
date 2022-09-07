import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
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
}));

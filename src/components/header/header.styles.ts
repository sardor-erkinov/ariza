import { createStyles } from '@mantine/core';

interface HeaderProps {
  sticky?: boolean;
}

export const useStyles = createStyles((theme, _props, getRef) => ({
  header: {
    width: '100%',
    height: '100%',
    '.mantine-Text-root': {
      cursor: 'pointer',
    },
  },
}));

import { Center, Space } from '@mantine/core';
import { ReactChild, ReactElement, useEffect } from 'react';
import Header from '../header';
import { useStyles } from './layout.styles';

const Layout = ({ children }: { children: ReactChild | ReactElement }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      {children}
      {/* <footer /> */}
    </div>
  );
};

export default Layout;

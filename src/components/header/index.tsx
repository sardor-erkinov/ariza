import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useStyles } from './header.styles';
import { Container, Group, Text, Tabs } from '@mantine/core';
import LogoIcon from '../icons/logo.icon';
import Button from '../button';
import Modal from '../modal';
import StyledTabs from '../tabs';
import LoginModal from './login';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <Container px={12} py={27} size={'xl'}>
        <Group position="apart">
          <LogoIcon />
          <Group spacing={40}>
            <Link passHref href={'#main'}>
              <Text size={'sm'}>Asosiy</Text>
            </Link>
            <Link passHref href={'#privilege'}>
              <Text size={'sm'}>Imtiyozlar</Text>
            </Link>
            <Link passHref href={'#news'}>
              <Text size={'sm'}>Yangiliklar</Text>
            </Link>
            <Link passHref href={'#statistics'}>
              <Text size={'sm'}>Statistikalar</Text>
            </Link>
            <Button
              onClick={() => setOpen(true)}
              color={'yellow'}
              style={{ width: '176px', height: '65px' }}
            >
              Kirish
            </Button>
          </Group>
        </Group>
      </Container>
      <LoginModal setOpen={setOpen} open={open} />
    </header>
  );
};

export default Header;

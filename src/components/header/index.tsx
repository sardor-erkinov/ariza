import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStyles } from './header.styles';
import { Container, Group, Text, Tabs, Menu, Divider, Center } from '@mantine/core';
import LogoIcon from '../icons/logo.icon';
import Button from '../button';
import LoginModal from './login';
import { useCollectUser } from '../../context/user/user.state';
import { CaretDownIcon, TrashIcon } from '@modulz/radix-icons';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { classes } = useStyles();
  const { isLoggedIn } = useCollectUser();
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
            {isLoggedIn ? (
              <Menu
                withArrow
                control={
                  <Center>
                    <Text color={'blue'} size="xs">
                      Mening profilim
                    </Text>
                    <CaretDownIcon color="blue" width={28} height={28} />
                  </Center>
                }
                trigger="hover"
                // @ts-expect-error
                openDelay={100}
                closeDelay={400}
                shadow="md"
              >
                <Menu.Item onClick={() => router.push('/profile')}>Mening arizam</Menu.Item>
                <Menu.Item>Yangi bildirishnomalar</Menu.Item>
                <Divider />
                <Menu.Item icon={<TrashIcon height={24} width={24} />} color="red">
                  Chiqish
                </Menu.Item>
              </Menu>
            ) : (
              <Button
                onClick={() => setOpen(true)}
                color={'yellow'}
                style={{ width: '176px', height: '65px' }}
              >
                Kirish
              </Button>
            )}
          </Group>
        </Group>
      </Container>
      <LoginModal setOpen={setOpen} open={open} />
    </header>
  );
};

export default Header;

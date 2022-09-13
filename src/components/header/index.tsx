import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStyles } from './header.styles';
import { Container, Group, Text, Tabs, Menu, Divider, Center, Box } from '@mantine/core';
import LogoIcon from '../icons/logo.icon';
import Button from '../button';
import LoginModal from './login';
import { useCollectUser } from '../../context/user/user.state';
import { CaretDownIcon, TrashIcon } from '@modulz/radix-icons';
import { logout } from '../../context/user/user.action';
import LogoutModal from './logout';
import { LogoPng } from '../assets';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [openLogout, setOpenLogout] = useState<boolean>(false);
  const { classes } = useStyles();
  const { isLoggedIn } = useCollectUser();
  const hashLinks = [
    {
      id: 1,
      name: 'Asosiy',
      hashtag: '#main',
    },
    {
      id: 2,
      name: 'Imtiyozlar',
      hashtag: '#privilege',
    },
    {
      id: 3,
      name: 'Yangiliklar',
      hashtag: '#news',
    },
    {
      id: 4,
      name: 'Statistikalar',
      hashtag: '#statistics',
    },
  ];
  return (
    <header className={classes.header}>
      <Container px={12} py={27} size={'xl'}>
        <Group position="apart">
          <div onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
            <img
              style={{ borderRadius: '50%' }}
              width={'80px'}
              height={'80px'}
              src={LogoPng.src}
              alt=""
            />
          </div>

          <Group spacing={40}>
            {hashLinks.map((item) => (
              <Link key={item.id} passHref href={`/${item.hashtag}`}>
                <Text weight={500} size={'sm'}>
                  {item.name}
                </Text>
              </Link>
            ))}

            {isLoggedIn ? (
              <Menu
                withArrow
                control={
                  <Center>
                    <Text weight={500} color={'blue'} size="xs">
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
                <Menu.Item
                  onClick={() => {
                    setOpenLogout(true);
                  }}
                  icon={<TrashIcon height={24} width={24} />}
                  color="red"
                >
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
      <LogoutModal setOpen={setOpenLogout} open={openLogout} />
    </header>
  );
};

export default Header;

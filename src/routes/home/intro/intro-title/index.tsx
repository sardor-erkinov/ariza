import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoginModal from '../../../../components/header/login';
import RightArrow from '../../../../components/icons/right-arrow.icon';
import { useCollectUser } from '../../../../context/user/user.state';
import { colors } from '../../../../styles/variables';
import { useStyles } from './intro-title.styles';

const IntroTitle = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { isLoggedIn } = useCollectUser();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    isLoggedIn ? router.push('/profile') : setOpen(true);
  };
  return (
    <Stack style={{ maxWidth: '654px', width: '100%' }} spacing={55} py={'121px'}>
      <Title order={1}>
        Magistratura uchun <span style={{ color: colors.yellow }}>Qabul 2022</span>
      </Title>
      <Text size="md">
        Oliy ta'lim muassasalarining magistratura bosqichiga kirish uchun onlayn ariza topshirish
        tizimi
      </Text>
      <Button onClick={handleClick} color={'yellow'} className={classes.longBtn}>
        <Group position="apart" spacing={120} style={{ width: '100%' }}>
          <Text size="md">Ariza topshiring</Text>
          <RightArrow />
        </Group>
      </Button>
      <Group spacing={9}>
        <Title order={3}>10030</Title>
        <Text size="xs">Jami arizalar soni</Text>
      </Group>
      <LoginModal setOpen={setOpen} open={open} />
    </Stack>
  );
};

export default IntroTitle;

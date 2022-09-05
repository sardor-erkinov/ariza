import { Group, Stack, Text, Title } from '@mantine/core';
import Button from '../../../../components/button';
import RightArrow from '../../../../components/icons/right-arrow.icon';
import { colors } from '../../../../styles/variables';

const IntroTitle = () => {
  return (
    <Stack style={{ maxWidth: '654px', width: '100%' }} spacing={55} py={'121px'}>
      <Title order={1}>
        Magistratura uchun <span style={{ color: colors.yellow }}>Qabul 2022</span>
      </Title>
      <Text size="md">
        Oliy ta'lim muassasalarining magistratura bosqichiga kirish uchun onlayn ariza topshirish
        tizimi
      </Text>
      <Button color={'yellow'} style={{ width: '100%', maxWidth: '369px', height: '68px' }}>
        <Group position="apart" spacing={120} style={{ width: '100%' }}>
          <Text size="md">Ariza topshiring</Text>
          <RightArrow />
        </Group>
      </Button>
      <Group spacing={9}>
        <Title order={3}>10030</Title>
        <Text size="xs">Jami arizalar soni</Text>
      </Group>
    </Stack>
  );
};

export default IntroTitle;

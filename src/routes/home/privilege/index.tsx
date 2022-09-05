import { Box, Center, Container, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { RewardImg } from '../../../components/assets';
import Img from '../../../components/image';
import { colors } from '../../../styles/variables';

const Privilege = () => {
  const manTheme = useMantineTheme();
  return (
    <Container px={12} py={120} size={'xl'}>
      <Center>
        <Title align="center" mb={129} order={2}>
          Magistraturaga topshiruvchilar <br /> uchun imtiyozlar
        </Title>
      </Center>
      <Group
        spacing={25}
        sx={(theme) => ({
          [theme.fn.smallerThan('xl')]: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}
      >
        <Stack
          align="center"
          sx={(theme) => ({
            width: '100%',
            maxWidth: '413px',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            background: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.gray[2],
          })}
          py={36}
          spacing={26}
          px={30}
        >
          <Img width={72} height={72} src={RewardImg.src} alt="reward" />
          <Text align="center" color={'dark'} weight={500} size="xl">
            Yutuqlar
          </Text>
          <Text weight={400} align="center" color={manTheme.colors.gray[5]} size="lg">
            Nomdor davlat stipendiyalari va “Zulfiya” hamda “Mard o‘g‘lon” davlat mukofotlari.
          </Text>
        </Stack>
        <Stack
          align="center"
          sx={(theme) => ({
            width: '100%',
            maxWidth: '413px',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            background: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.gray[2],
          })}
          py={36}
          spacing={26}
          px={30}
        >
          <Img width={72} height={72} src={RewardImg.src} alt="reward" />
          <Text align="center" color={'dark'} weight={500} size="xl">
            Yutuqlar
          </Text>
          <Text weight={400} align="center" color={manTheme.colors.gray[5]} size="lg">
            Nomdor davlat stipendiyalari va “Zulfiya” hamda “Mard o‘g‘lon” davlat mukofotlari.
          </Text>
        </Stack>
        <Stack
          align="center"
          sx={(theme) => ({
            width: '100%',
            maxWidth: '413px',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            background: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.gray[2],
          })}
          py={36}
          spacing={26}
          px={30}
        >
          <Img width={72} height={72} src={RewardImg.src} alt="reward" />
          <Text align="center" color={'dark'} weight={500} size="xl">
            Yutuqlar
          </Text>
          <Text weight={400} align="center" color={manTheme.colors.gray[5]} size="lg">
            Nomdor davlat stipendiyalari va “Zulfiya” hamda “Mard o‘g‘lon” davlat mukofotlari.
          </Text>
        </Stack>
      </Group>
    </Container>
  );
};

export default Privilege;

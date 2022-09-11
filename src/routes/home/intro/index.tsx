import { Box, Container, Group } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { StudentsImg } from '../../../components/assets';
import Img from '../../../components/image';
import IntroTitle from './intro-title';
import { useStyles } from './intro.styles';

const Intro = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <Container size={'xl'}>
        <Group
          sx={(theme) => ({
            [theme.fn.smallerThan('xl')]: { justifyContent: 'center' },
          })}
          spacing={50}
          align={'flex-end'}
        >
          <IntroTitle />
          <Box style={{ position: 'relative' }}>
            <Img
              className={classes.img}
              width={'580px'}
              height={'590px'}
              src={StudentsImg.src}
              alt="students"
            />
            <div className={classes.ellipsis}></div>
          </Box>
        </Group>
      </Container>
    </section>
  );
};

export default Intro;

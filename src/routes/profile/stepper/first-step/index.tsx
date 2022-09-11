import { Title, Text, Divider, Group, SimpleGrid } from '@mantine/core';
import Select from '../../../../components/select';
import TextInput from '../../../../components/text-input';

const FirstStep = () => {
  return (
    <>
      <Text weight={500} size="xl">
        Shaxsiy ma'lumotlar
      </Text>
      <Divider my={27} size={0.5} />
      <SimpleGrid
        breakpoints={[
          { minWidth: 755, cols: 2, spacing: 'sm' },
          { minWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <Select
          required
          label="Fuqarolik"
          value="O'ZBEKISTON"
          data={["O'ZBEKISTON"]}
          defaultValue="O'ZBEKISTON"
          disabled
        />
        <Select
          required
          value="Toshkent shahri"
          disabled
          label="Hozirda yashayotgan viloyat (shahar)"
          data={['Toshkent shahri']}
        />
      </SimpleGrid>
      <Divider my={27} size={0.5} />
      <SimpleGrid
        breakpoints={[
          { minWidth: 755, cols: 2, spacing: 'sm' },
          { minWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <TextInput required label="JShShIR" value="JShShIR" defaultValue="O'ZBEKISTON" disabled />
        <Select required value="O'ZBEK" disabled label="Millati" data={["O'ZBEK"]} />
      </SimpleGrid>
      <SimpleGrid
        mt={20}
        breakpoints={[
          { minWidth: 755, cols: 2, spacing: 'sm' },
          { minWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <TextInput required label="Ismi" disabled />
        <TextInput required label="Familiya" disabled />
      </SimpleGrid>
    </>
  );
};

export default FirstStep;

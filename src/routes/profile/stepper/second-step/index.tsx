import { Text, Divider, SimpleGrid } from '@mantine/core';
import DatePicker from '../../../../components/date-picker';
import Select from '../../../../components/select';
import TextInput from '../../../../components/text-input';

const SecondStep = ({ title }: { title?: string }) => {
  return (
    <>
      <Text weight={500} size="xl">
        {title ?? "Ta'lim ma’lumotlari"}
      </Text>
      <Divider my={27} size={0.5} />

      <Select
        mb={20}
        required
        label="O‘quv muassasi joylashgan davlat"
        value="O'ZBEKISTON"
        data={["O'ZBEKISTON"]}
        defaultValue="O'ZBEKISTON"
      />
      <TextInput required mb={20} label="O‘quv muassasi nomi" />
      <SimpleGrid
        breakpoints={[
          { minWidth: 755, cols: 2, spacing: 'sm' },
          { minWidth: 600, cols: 1, spacing: 'sm' },
        ]}
        mb={20}
      >
        <Select required value="Kunduzgi" label="Ta'lim shakli" data={['Kunduzgi']} />
        <DatePicker required label="Tamomlagan yili" placeholder="Tamomlagan yili" />
      </SimpleGrid>
    </>
  );
};

export default SecondStep;

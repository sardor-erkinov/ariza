import { Text, Divider, SimpleGrid } from '@mantine/core';
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
        disabled
      />
      <Select
        required
        value="Toshkent shahri"
        mb={20}
        disabled
        label="O‘quv muassasi nomi"
        data={['Toshkent shahri']}
      />
      <SimpleGrid
        breakpoints={[
          { minWidth: 755, cols: 2, spacing: 'sm' },
          { minWidth: 600, cols: 1, spacing: 'sm' },
        ]}
        mb={20}
      >
        <Select required value="O'ZBEK" disabled label="Ta'lim shakli" data={["O'ZBEK"]} />
        <Select required value="O'ZBEK" disabled label="Tamomlagan yili" data={["O'ZBEK"]} />
      </SimpleGrid>
    </>
  );
};

export default SecondStep;

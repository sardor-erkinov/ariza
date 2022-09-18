import { Text, Divider, SimpleGrid, Stack } from '@mantine/core';
import { FormEvent } from 'react';
import { AddStepperProps } from '..';
import DatePicker from '../../../../components/date-picker';
import FileInput from '../../../../components/file-input';
import Select from '../../../../components/select';
import TextInput from '../../../../components/text-input';

interface StepProps extends AddStepperProps {
  title?: string;
}

const SecondStep = ({ title, active, setActive }: StepProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive(2);
  };
  return (
    <form id="documents" onSubmit={handleSubmit} style={{ width: '100%' }}>
      <Text weight={500} mb={10} size="xl">
        {title ?? "Hujjatlar ro'yxati"}
      </Text>
      <Divider color={'gray'} my={27} size={0.5} />
      <Stack spacing={30}>
        <FileInput
          required
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Tavsifnoma shartlari"
          placeholder="Tavsifnoma"
          infoText={`Tavsifnomada yoritilishi lozim boʼlgan jihatlar:
- nomzodning familiyasi, ismi va otasining ismi, tugʼilgan yili, sanasi, millati (fuqarolik pasporti yoki tugʼilganlik toʼgʼrisidagi guvohnoma boʼyicha yozish);
- oʼqish joyining rasmiy nomi hamda nomzod qaysi sinf yoki bosqichda oʼqishi;
- nomzodning qaysi yoʼnalish boʼyicha tavsiya etilayotganligi;
- nomzod tavsiya etilayotgan yoʼnalishning aynan qaysi sohasi yoki turi bilan shugʼullanishi (Masalan: adabiyot yoʼnalishining – sheʼriyat yoki publitsistika sohasi, madaniyat yoʼnalishining – suxandonlik, jurnalistika, stsenarist sohasi, sport yoʼnalishining – badiiy gimnastika, suzish, tennis, shaxmat turi, sanʼat yoʼnalishining – tasviriy yoki amaliy sanʼat, anʼanaviy qoʼshiqchilik, fortepiano sohasi, taʼlim yoʼnalishining – kimyo, matematika, ona tili va adabiyot, jamoatchilik faoliyati yoʼnalishining – tadbirkorlik, fermerlik, yoshlar ittifoqi faollari va boshqa sohalari); 
- asosiy yoʼnalishi boʼyicha erishgan yutuqlarining yillar ketma-ketligida berilishi, tanlovlarning qaerda, qaysi tashkilot tomonidan, kimlar oʼrtasida, qanday nom bilan oʼtkazilganligi, nechanchi oʼrinni egallaganligi hamda nima bilan taqdirlanganligi; 
- asosiy yoʼnalishidan tashqari boshqa yoʼnalishlar boʼyicha erishgan yutuqlari;
- yetakchilik qobiliyati, ijtimoiy faolligi, tashabbuskorligini ochib beradigan jihatlari 
va yutuqlari;
- axborot-kommunikatsiya texnologiyalaridan qay darajada foydalanishi (masalan: turli ijtimoiy tarmoqlari, veb-sahifalar va h.k.);
- sportning qaysi turi bilan shugʼullanishi 
va erishgan yutuqlari; 
- sportchilarga yozilgan tavsifnomada erishgan yutuqlari bilan birga nomzod Oʼzbekiston milliy terma jamoasi aʼzosi hamda sport unvoniga (sport ustaligiga nomzod, sport ustasi, xalqaro toifadagi sport ustasi) ega boʼlsa, buni qayd etish zarur.`}
          label="Nomzodning 9x12 sm. hajmdagi fotosurati ostiga joylashtirilgan tavsifnoma (annotatsiya)"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi"
          placeholder="Ma'lumotnoma"
          required
          infoText={`Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi
- axborot-kommunikatsiya texnologiyalaridan qay darajada foydalanishi (masalan: turli ijtimoiy tarmoqlari, veb-sahifalar va h.k.);
- sportning qaysi turi bilan shugʼullanishi 
va erishgan yutuqlari; 
- sportchilarga yozilgan tavsifnomada erishgan yutuqlari bilan birga nomzod Oʼzbekiston milliy terma jamoasi aʼzosi hamda sport unvoniga (sport ustaligiga nomzod, sport ustasi, xalqaro toifadagi sport ustasi) ega boʼlsa, buni qayd etish zarur.`}
          label="Maʼlumotnoma-obʼektivka, nomzodning toʼldirilgan soʼrovnomasi va tarjimai holi"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <SimpleGrid
          breakpoints={[
            { minWidth: 755, cols: 2, spacing: 'sm' },
            { minWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <FileInput
            required
            accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
            infoTitle="Tavsiyanoma 1"
            placeholder="Tavsiyanoma 1"
            infoText={`Nomzod ta\`lim olayotgan yoki ishlayotgan muassasa raxbarining tavsiyanomasi`}
            label="Tavsiyanoma 1"
          />
          <FileInput
            accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
            infoTitle="Tavsiyanoma 2"
            placeholder="Tavsiyanoma 2"
            required
            infoText={`O'zbekiston yoshlar ittifoqi viloyat Kengashi raisining tavsiyanomasi.
Tavsiyanoma rangli blankada, imzolangan, registratsiya qilingan xamda nomzodning asosiy erishgan yutuqlari qayd etilgan xolda (qisqacha) bo'lishi kerak.`}
            label="Tavsiyanoma 2"
          />
        </SimpleGrid>
        <Divider color={'gray'} my={5} size={0.5} />

        <SimpleGrid
          breakpoints={[
            { minWidth: 1024, cols: 3, spacing: 'sm' },
            { minWidth: 755, cols: 2, spacing: 'sm' },
            { minWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <FileInput
            required
            accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
            infoTitle="Tavsifnoma 1"
            placeholder="Tavsifnoma 1"
            infoText={`Nomzod taʼlim olayotgan yoki ishlayotgan muassasa rahbarining tavsifnomasi`}
            label="Tavsifnoma 1"
          />
          <FileInput
            accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
            infoTitle="Tavsifnoma 2"
            placeholder="Tavsifnoma 2"
            required
            infoText={`O‘zbekiston yoshlar ittifoqi viloyat Kengashi raisining tavsifnomasi`}
            label="Tavsifnoma 2"
          />
          <FileInput
            accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
            infoTitle="Tavsifnoma 3"
            placeholder="Tavsifnoma 3"
            required
            infoText={`Nomzod istiqomat qilayotgan mahalla fuqarolar yig‘ini raisining tavsifnomasi`}
            label="Tavsifnoma 3"
          />
        </SimpleGrid>
        <Divider color={'gray'} my={5} size={0.5} />

        <SimpleGrid
          breakpoints={[
            { minWidth: 755, cols: 2, spacing: 'sm' },
            { minWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <FileInput
            required
            accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
            infoTitle="Fikrnoma 1"
            placeholder="Fikrnoma 1"
            infoText={`Fikrnomalar nomzodning yo‘nalishi bo‘yicha adiblar, shoirlar, jurnalistlar, madaniyat xodimlari, sanʼatshunoslar, rassomlar, haykaltaroshlar, olimlar, fan nomzodlari, pedagoglar, sport murabbiylari kabi soha mutaxassislaridan olinadi.`}
            label="Fikrnoma 1"
          />
          <FileInput
            accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
            infoTitle="Fikrnoma 2"
            placeholder="Fikrnoma 2"
            required
            infoText={`Fikrnoma imzolangan bo‘lishi, qaysi uyushma yoki tashkilot aʼzosi bo‘lsa guvohnoma raqami va berilgan yili yozilgan bo‘lishi lozim (Masalan, Yozuvchilar yoki Jurnalistlar uyushmasi aʼzosi bo‘lsa, aʼzolik guvohnomasi).`}
            label="Fikrnoma 2"
          />
        </SimpleGrid>
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Taqriz"
          placeholder="Taqriz"
          required
          infoText={`Taqriz nomzodning yo‘nalishi bo‘yicha ilmiy
va badiiy ijodi, tasviriy sanʼat namunalariga soha mutaxassislari tomonidan yozilgan bo‘lishi kerak.

(Sport va shu kabi ayrim sohalar uchun taqriz yozilmaydi).`}
          label="Taqriz"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Nomzodning erishgan yutuqlari ro‘yxati"
          placeholder="Nomzodning erishgan yutuqlari ro‘yxati"
          required
          infoText={`Ro‘yxat namunada ko‘rsatilgan talablar bo‘yicha to‘liq yozilishi shart.

So‘nggi 3 yil davomida (ayrim hollarda 3 yildan oldingi davrda ham ahamiyatli yutuqqa erishgan bo‘lsa, uni ham yoritish) erishilgan yutuqlarni tasdiqlovchi diplom, sertifikat, faxriy yorliq va shu kabi hujjatlar yillar ketma-ketligida, avval asosiy yo‘nalishi bo‘yicha, so‘ng qo‘shimcha faoliyatidan erishgan yutuqlari bo‘yicha  yozilishi kerak.

Nomzodning yutuqlari kamida viloyat darajasida bo‘lishi lozim.`}
          label="Nomzodning erishgan yutuqlari ro‘yxati"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Nomzodning erishgan yutuqlari bo‘yicha tasdiqlovchi hujjatlarining nusxalari"
          placeholder="Nomzodning erishgan yutuqlari bo‘yicha tasdiqlovchi hujjatlarining nusxalari"
          required
          infoText={`Hujjatlarning nusxalari ro‘yxat bo‘yicha ketma-ketlikda joylashtirilgan bo‘lishi shart. Hujjatlar sifatli bo‘lib, undagi yozuv, muhr va maʼlumotlar aniq ko‘rinishi lozim.
        
        Xorijiy tillarda yozilgan hujjatlarning tarjimasi notarial idora tomonidan tasdiqlangan holda ilova qilinishi kerak. Hujjat berilgan yilning yozilganligiga hamda «Asliga to‘g‘ri» deb tasdiqlanganligiga alohida eʼtibor qaratish lozim.`}
          label="Nomzodning erishgan yutuqlari bo‘yicha tasdiqlovchi hujjatlarining nusxalari"
          ismultiple
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Nomzodning tashabbuskorligi, targ‘ibotchiligi, faolligi bo‘yicha hujjatlar"
          placeholder="Nomzodning tashabbuskorligi, targ‘ibotchiligi, faolligi bo‘yicha hujjatlar"
          required
          infoText={`Nomzod o‘quv muassasalari yoki mahallada to‘garak  tashkil etib, yoshlarni jalb etgan bo‘lsa, to‘garak tuzilganligi haqidagi qaror va boshqa tasdiqlovchi hujjatlar taqdim etilishi kerak.`}
          label="Nomzodning tashabbuskorligi, targ‘ibotchiligi, faolligi bo‘yicha hujjatlar"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Nomzodning OAVlarda eʼlon qilingan ijodiy (maqola, hikoya, sheʼr va hokazo)   yoki ilmiy ishlarining ro‘yxati"
          placeholder="Nomzodning OAVlarda eʼlon qilingan ijodiy (maqola, hikoya, sheʼr va hokazo)   yoki ilmiy ishlarining ro‘yxati"
          required
          infoText={` Ro‘yxatda ijodiy yoki ilmiy ishning sarlavhasi, qaysi gazeta, jurnalning qaysi sonida, yoki qaysi nashriyotda chop etilganligi, yillar ketma-ketligida, jadval shaklida yozilishi lozim.

Nomzod to‘g‘risidagi maʼlumotlar yoki ularning maqolalari yoritilgan gazeta va jurnallar taqdim etilishi kerak.`}
          label="Nomzodning OAVlarda eʼlon qilingan ijodiy (maqola, hikoya, sheʼr va hokazo)   yoki ilmiy ishlarining ro‘yxati"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Nomzodning ijodiy  (ilmiy) ishlaridan namunalar"
          placeholder="Nomzodning ijodiy  (ilmiy) ishlaridan namunalar"
          required
          infoText={`Nomzodning yo‘nalishiga oid ijodiy yoki ilmiy ishlari chop etilgan gazeta va jurnallar nusxalari, badiiy-ilmiy kitoblari, qo‘llanmalari, qo‘shiqlari ko‘chirilgan diski va boshqa shu kabi ahamiyatli ishlaridan namunalar ilova qilinishi lozim (Kitoblari nashriyotda chop etilgan bo‘lishi shart,  kompyuterdan chiqarilgan
va broshyuralar tarzida bo‘lmasligi lozim. Nomzodning kichik sheʼrlari yoki ahamiyatsiz maʼlumotlari chop etilgan gazeta va jurnallar taqdim etilmasligi kerak).`}
          label="Nomzodning ijodiy  (ilmiy) ishlaridan namunalar"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Nomzodning fuqarolik pasporti yoki tug‘ilganlik to‘g‘risidagi guvohnomasidan nusxa"
          placeholder="Nomzodning fuqarolik pasporti yoki tug‘ilganlik to‘g‘risidagi guvohnomasidan nusxa"
          required
          infoText={`Pasport yoki tug‘ilganlik to‘g‘risidagi guvohnoma nusxasi sifatli darajada, undagi yozuv va muhrlar aniq ko‘rinishi kerak.`}
          label="Nomzodning fuqarolik pasporti yoki tug‘ilganlik to‘g‘risidagi guvohnomasidan nusxa"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="image/*, .doc, .docx,.xls,.xlsx,.pdf,.csv"
          infoTitle="Nomzodning ota-onasining fuqarolik pasportidan nusxa"
          placeholder="Nomzodning ota-onasining fuqarolik pasportidan nusxa"
          required
          infoText={`Pasport nusxasi sifatli darajada, undagi yozuv
va muhrlar aniq ko‘rinishi kerak.`}
          label="Nomzodning ota-onasining fuqarolik pasportidan nusxa"
        />
        <Divider color={'gray'} my={5} size={0.5} />

        <SimpleGrid
          breakpoints={[
            { minWidth: 755, cols: 2, spacing: 'sm' },
            { minWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <FileInput
            accept="image/*"
            infoTitle="Nomzodning fotosurati (2 dona)"
            placeholder="Nomzodning fotosurati (2 dona)"
            required
            ismultiple
            infoText={`Nomzodning 9x12 sm. (orqa fon och havo rangda) hajmdagi  yuqori sifatli 2 dona fotosurati taqdim etiladi. Fotosuratda:

- o‘quvchining rasmiy kiyimda, oq rangdagi ko‘ylak
va qora rangli klassik shakldagi kostyumda, ortiqcha taqinchoq va bo‘yoqlarsiz, soch turmagi tepaga yoki yonga yig‘ilgan, ochiq chehrada bo‘lishi lozim;

- o‘zini tutishi va nigohida tabiiylik, sipolik, kamtarlik ifodalanishi maqsadga muvofiq;

- fotosuratning orqa foni och havorangda bo‘lishiga alohida eʼtibor qaratish kerak. 

Fotosuratga professional fotostudiyalarda tushish tavsiya etiladi.

(Fotolavhalarda faqat ijodiy va ijtimoiy faoliyati  aks etgan bo‘lishi lozim.)`}
            label="Nomzodning fotosurati (2 dona)"
          />
          <FileInput
            accept="image/*"
            infoTitle="Nomzodning faoliyati aks ettirilgan fotolavhalar
(5-6 ta)"
            placeholder="Nomzodning faoliyati aks ettirilgan fotolavhalar
(5-6 ta)"
            required
            ismultiple
            infoText={`Fotosuratda:

- o‘quvchining rasmiy kiyimda, oq rangdagi ko‘ylak
va qora rangli klassik shakldagi kostyumda, ortiqcha taqinchoq va bo‘yoqlarsiz, soch turmagi tepaga yoki yonga yig‘ilgan, ochiq chehrada bo‘lishi lozim;

- o‘zini tutishi va nigohida tabiiylik, sipolik, kamtarlik ifodalanishi maqsadga muvofiq;

- fotosuratning orqa foni och havorangda bo‘lishiga alohida eʼtibor qaratish kerak. 

Fotosuratga professional fotostudiyalarda tushish tavsiya etiladi.

(Fotolavhalarda faqat ijodiy va ijtimoiy faoliyati  aks etgan bo‘lishi lozim.)`}
            label="Nomzodning faoliyati aks ettirilgan fotolavhalar
(5-6 ta)"
          />
        </SimpleGrid>

        <Divider color={'gray'} my={5} size={0.5} />

        <FileInput
          accept="video/*"
          infoTitle="Videolavha"
          placeholder="Videolavha"
          required
          infoText={`Nomzodning faoliyati, erishgan salmoqli yutuqlari, kelajak rejalari bo‘yicha 3-5 minutlik`}
          label="Videolavha"
        />
      </Stack>
    </form>
  );
};

export default SecondStep;

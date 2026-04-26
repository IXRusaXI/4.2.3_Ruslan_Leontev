import { Group, Stack, Title, Text, Badge, Button } from '@mantine/core';
import { ShadowWrapper } from './../../shared/ShadowWrapper/ShadowWrapper'
// import './style.scss'

export function Vacancy() {
  return (
    <ShadowWrapper >
        <Stack mb='lg' gap='sm'>
            <Title order={3} c='primary' fw={600}> Frontend разработчик в казино </Title>
            <Group>
                <Text>80 000 - 130 000 &#8381;</Text>
                <Text c='#00000050'> Без опыта </Text>
            </Group>
        </Stack>
        <Stack gap='xs' mb='lg'>
            <Text c='#00000050'>Kata Academy</Text>
            <Badge size='xs'> Можно удаленно </Badge>
            <Text size='lg'>Набережные челны</Text>
        </Stack>
        <Group>
            <Button fw={400} bg='black' c='white'>Смотреть вакансию</Button>
            <Button fw={400} bg='#00000015' c='black'>Откликнуться</Button>
        </Group>
    </ShadowWrapper>
  );
}

export default Vacancy
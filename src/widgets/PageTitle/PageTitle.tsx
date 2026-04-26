import { Button, Group, Input, Stack, Title, Text } from '@mantine/core';
import { SearchInput } from './../../shared/SearchInput/SearchInput'

export function PageTitle() {

  return (
    <Group justify='space-between' py='md'>
        <Stack gap={2}>
            <Title order={1}>Список вакансий</Title>
            <Text c='pre-light' fw={600} size='xl' >По професии Frontend-разработчик</Text>
        </Stack>

        <Group>
            <SearchInput />
            <Button color='primary' h={50} size='lg' fw={400}> Найти </Button>
        </Group>
    </Group>
  );
}

export default PageTitle
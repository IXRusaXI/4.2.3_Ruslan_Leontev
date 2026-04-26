import { Button, Badge, Group, Card, Text, Box, Stack, Container, Flex } from '@mantine/core';
import { Header } from '../widgets/Header/Header';
import { PageTitle } from './../widgets/PageTitle/PageTitle'
import { Divider } from '@mantine/core';
import { ContentContainer } from './../shared/ContentContainer/ContentConteiner';
import { SearchSettings } from './../widgets/SearchSettings/SearchSettings'
import './App.css'


function App() {

  return (
    <Box  bg='background' mih='100vh'>
      <Header />
      <ContentContainer>
        <PageTitle />
      </ContentContainer>

      <Divider color='#5050552c' />

      <ContentContainer>
        <Group gap={0} justify='space-between' align='top'>
          <Stack gap='sm' w="30%" >
            <SearchSettings />
            <SearchSettings />
          </Stack>


          <Stack gap='lg' w="67%">
            <SearchSettings />
            <SearchSettings />
            <SearchSettings />
            <SearchSettings />
            <SearchSettings />
            <SearchSettings />
            <SearchSettings />
            <SearchSettings />
            <SearchSettings />
          </Stack>
        </Group>
      </ContentContainer>

      <Card shadow="sm" padding="lg" radius="md" withBorder w={400} mx="auto" mt={40}>
        <Badge color="blue" variant="gradient">Mantine работает!</Badge>
        <Group justify="center" mt="md">
          <Button color="primary" size="lg">Красная кнопка</Button>
          <Button color="green" variant="outline">Зелёная outline</Button>
        </Group>
        <Text c="dimmed" ta="center" mt="sm">
          Проверь градиенты, тени и responsive.
        </Text>
      </Card>
    </ Box>
  )
}

export default App

import { Button, Badge, Group, Card, Text, Box, Stack, Container, Flex, Pagination } from '@mantine/core';
import { Header } from '../widgets/Header/Header';
import { PageTitle } from './../widgets/PageTitle/PageTitle'
import { Divider } from '@mantine/core';
import { ContentContainer } from './../shared/ContentContainer/ContentConteiner';
import { SearchSettings } from './../widgets/SearchSettings/SearchSettings'
import { CitySelector } from './../shared/CitySelector/CitySelector'
import { Vacancy } from './../widgets/Vacancy/Vacancy'
import './App.css'


function App() {

  return (
    <Box  bg='background' mih='100vh' pb='xl'>
      <Header />
      <ContentContainer>
        <PageTitle />
      </ContentContainer>

      <Divider color='#5050552c' />

      <ContentContainer>
        <Group gap={0} justify='space-between' align='top'>
          <Stack gap='sm' w="30%" >
            <SearchSettings />
            <CitySelector />
          </Stack>


          <Stack gap='lg' w="67%">
            <Vacancy />
            <Vacancy />
            <Vacancy />
            <Vacancy />
            <Vacancy />
            <Vacancy />

            <Group justify='center' mb='xl'>
              <Pagination total={10} withEdges radius={4}/>
            </Group>

          </Stack>
        </Group>
      </ContentContainer>
    </ Box>
  )
}

export default App

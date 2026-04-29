import { Button, Badge, Group, Card, Text, Box, Stack, Container, Flex, Pagination } from '@mantine/core';
import { Header } from '../widgets/Header/Header';
import { PageTitle } from './../widgets/PageTitle/PageTitle'
import { Divider } from '@mantine/core';
import { ContentContainer } from './../shared/ContentContainer/ContentConteiner';
import SkillSettings from '../widgets/SkillSettings/SkillSettings'
import { CitySelector } from './../shared/CitySelector/CitySelector'
import { Vacancy } from './../widgets/Vacancy/Vacancy'
import './App.css'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './../store/typedHooks'
import { vacanciesActions } from './../store/slices/vacancies/vacanciesSlice';
import { pageActions } from './../store/slices/page/pageSlice';
import VacanciesData from './../pages/data/vacancies'


function App() {
  const dispatch = useAppDispatch()
  const all = useAppSelector(state => state.vacancy.all)
  const city = useAppSelector(state => state.filter.city)
  const activePage = useAppSelector(state => state.page.activePage)
  const total = useAppSelector(state => state.page.total)

  useEffect(() => {
    console.log('city:', city);
  }, [city])

  useEffect(() => {
    dispatch(vacanciesActions.setAllVacancies(VacanciesData))
    dispatch(pageActions.setTotalPages(VacanciesData.length / 10))
  }, [])

  function setPage(page: number) {
    dispatch(pageActions.setPage(page))
    console.log('page:', page);
  }

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
            <SkillSettings />
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
              <Pagination
                value={activePage}
                onChange={setPage}
                total={total}
                radius={4} withEdges/>
            </Group>

          </Stack>
        </Group>
      </ContentContainer>
    </ Box>
  )
}

export default App

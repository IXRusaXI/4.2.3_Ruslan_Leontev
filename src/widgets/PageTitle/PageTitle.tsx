import { Button, Group, Input, Stack, Title, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks'
import { filterActions } from '../../store/slices/filter/filterSlice';
import SearchInput from './../../shared/SearchInput/SearchInput';
import { useState } from 'react';

export function PageTitle() {
  const searchString = useAppSelector(state => state.filter.searchString)
  const dispatch = useAppDispatch()
  
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    // Активируем перефильтрацию списка
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(filterActions.setSearchString(e.target.value))
  }

  return (
    <Group justify='space-between' py='md'>
        <Stack gap={2}>
            <Title order={1}>Список вакансий</Title>
            <Text c='pre-light' fw={600} size='xl' >По професии Frontend-разработчик</Text>
        </Stack>

        <Group>
            <SearchInput
              onChange={onChange} 
              value={searchString} 
            />
            <Button 
              onClick={onClick} 
              color='primary' 
              h={50} 
              size='lg' 
              fw={400}> 
              Найти 
            </Button>
        </Group>
    </Group>
  );
}

export default PageTitle
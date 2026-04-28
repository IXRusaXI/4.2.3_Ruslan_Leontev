import { Select } from '@mantine/core';
import { ShadowWrapper } from './../../shared/ShadowWrapper/ShadowWrapper'
import searchIcon from './../../shared/icons/geoMark.svg'
import { useAppDispatch, useAppSelector } from '../../store/typedHooks'
import './style.scss'
import { filterActions } from '../../store/slices/filter/filterSlice';
import { useState } from 'react';

export function CitySelector() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const dispatch = useAppDispatch()
  // const skills = useAppSelector(state => state.filter.skills)


  const handleChange = (value: string | null) => {
    setSelectedValue(value);
    value && dispatch(filterActions.updateCity(value))
  };

  return (
    <ShadowWrapper >
        <Select 
        value={selectedValue} onChange={handleChange}
            // onSelect={event => dispatch(filterActions.updateCity(event.target.value))}
            data={['Москва', 'Питер', 'Чернобыль', 'Екатеринбург', 'Тула']}
            className='city-selector'
            placeholder='Все города'
            leftSection={
                <img 
                src={searchIcon} 
                height={18} 
                width={18} 
                style={{opacity: '0.7'}}
            />}
        />
    </ShadowWrapper>
  );
}

export default CitySelector
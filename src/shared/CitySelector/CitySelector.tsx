import { Select } from '@mantine/core';
import { ShadowWrapper } from './../../shared/ShadowWrapper/ShadowWrapper'
import searchIcon from './../../shared/icons/geoMark.svg'
import { useAppDispatch } from '../../store/typedHooks'
import './style.scss'
import { filterActions } from '../../store/slices/filter/filterSlice';
import { useEffect, useState } from 'react';
import { useQueryParams } from '../../tools/params/ParamTool';

export function CitySelector() {
  const [selectedValue, setSelectedValue] = useState<string | null>('Все города');
  const dispatch = useAppDispatch()
  const { updateCity } = useQueryParams()

  const handleChange = (value: string | null) => {
    setSelectedValue(value);
    value && dispatch(filterActions.updateCity(value))
    value && updateCity(value)
  };

  useEffect(() => {
    updateCity(selectedValue)
  }, [])

  return (
    <ShadowWrapper >
        <Select 
        value={selectedValue} onChange={handleChange}
            data={['Все города', 'Москва', 'Санкт‑Петербург', 'Чернобыль', 'Екатеринбург', 'Тула']}
            className='city-selector'
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
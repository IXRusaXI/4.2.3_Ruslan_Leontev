import { Select } from '@mantine/core';
import { ShadowWrapper } from './../../shared/ShadowWrapper/ShadowWrapper'
import searchIcon from './../../shared/icons/geoMark.svg'
import './style.scss'

export function CitySelector() {
  return (
    <ShadowWrapper >
        <Select 
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
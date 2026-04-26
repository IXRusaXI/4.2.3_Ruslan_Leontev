import { Input } from '@mantine/core';
import searchIcon from './../../shared/icons/search.svg'
import './style.scss'

export function SearchInput() {

  return (
    <Input
        placeholder="Должность или название компании"
        size="lg"
        w={450}
        className={'search-input'}
        leftSection={
            <img 
            src={searchIcon} 
            height={20} 
            width={20} 
            alt="search"
            />
        }
    />
  );
}

export default SearchInput
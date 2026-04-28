import { Box, Button, Group, Input, Stack, Text, Image, Flex, Pill } from '@mantine/core';
import { ShadowWrapper } from '../../shared/ShadowWrapper/ShadowWrapper'
import plusIcon from './../../shared/icons/plus.svg'
import './style.scss'
import SkillList from '../../shared/SkillList/SkillList';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks'
import { filterActions } from '../../store/slices/filter/filterSlice';
import { useState } from 'react';

export function SearchSettings() {
  const [skillString, setSkillString] = useState('')
  const dispatch = useAppDispatch()
  const skills = useAppSelector(state => state.filter.skills)


  return (
    <ShadowWrapper >
        <Stack>
            <Text fw={600} size='lg'>Ключевые навыки</Text>

            <Group justify='space-between'>
                <Input
                    placeholder="Навык"
                    w={'78%'}
                    className={'skill-input'}
                    value={skillString}
                    onChange={(e) => setSkillString(e.target.value)}
                />
                <Button px='sm' color='#006eff60' onClick={() => dispatch(filterActions.addSkill(skillString))}>
                    <Image src={plusIcon} />    
                </Button>
            </Group>

            <Flex>
                <SkillList>
                    {skills?.map(skill => 
                    <Pill 
                        key={skill} 
                        bg='#00000008' 
                        withRemoveButton 
                        onRemove={() => dispatch(filterActions.removeSkill(skill))}
                    >
                        {skill}
                    </Pill>)}
                </SkillList>
            </Flex>
        </Stack>
    </ShadowWrapper>
  );
}

export default SearchSettings
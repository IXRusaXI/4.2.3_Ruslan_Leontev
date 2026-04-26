import { Box, Button, Group, Input, Stack, Text, Image, Flex, Pill } from '@mantine/core';
import { ShadowWrapper } from './../../shared/ShadowWrapper/ShadowWrapper'
import plusIcon from './../../shared/icons/plus.svg'
import './style.scss'
import SkillList from '../../shared/SkillList/SkillList';

export function SearchSettings() {
  return (
    <ShadowWrapper >
        <Stack>
            <Text fw={600} size='lg'>Ключевые навыки</Text>

            <Group justify='space-between'>
                <Input
                    placeholder="Навык"
                    w={'80%'}
                    className={'skill-input'}
                />
                <Button px='sm' color='#006eff60'>
                    <Image src={plusIcon} />    
                </Button>
            </Group>

            <Flex>
                <SkillList>
                    <Pill bg='#00000008' withRemoveButton>фффф</Pill>
                </SkillList>
            </Flex>
        </Stack>
    </ShadowWrapper>
  );
}

export default SearchSettings
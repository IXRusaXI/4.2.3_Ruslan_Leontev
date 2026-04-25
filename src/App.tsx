import './App.css'
import { Button, Badge, Group, Card, Text } from '@mantine/core';

function App() {

  return (
    <>
    <Card shadow="sm" padding="lg" radius="md" withBorder w={400} mx="auto" mt={40}>
      <Badge color="blue" variant="gradient">Mantine работает!</Badge>
      <Group justify="center" mt="md">
        <Button color="red" size="lg">Красная кнопка</Button>
        <Button color="green" variant="outline">Зелёная outline</Button>
      </Group>
      <Text c="dimmed" ta="center" mt="sm">
        Проверь градиенты, тени и responsive.
      </Text>
    </Card>
    </>
  )
}

export default App

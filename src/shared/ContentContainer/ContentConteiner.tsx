import { Container } from '@mantine/core';

interface ContentContainerProps {
  children: React.ReactNode;
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <>
      <Container size="lg" py="lg"> {/* xl ~1200px, центр + отступы как VK/FB */}
        {children}
      </Container>
    </>
  );
}

export default ContentContainer
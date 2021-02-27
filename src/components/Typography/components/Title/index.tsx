/**
 * Styles.
 */
import { Container, Text, Underline } from './styles'

/**
 * Type definitions.
 */
type Props = {
  title: string
  hasUnderline?: boolean;
}
/**
 * Component.
 */ 

export function SectionTitle({ 
  title = 'Seu título aqui',
  hasUnderline = false,
}: Props) {
  return (
    <Container>
      <Text hasUnderline={hasUnderline}>{title}</Text>
      {hasUnderline && <Underline />}
    </Container>
  );
}

/**
 * Styles.
 */
import { Container } from './styles'

import { SectionTitle } from '../../../Typography/components/Title'

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

export function Section({ title = 'Seu título aqui', hasUnderline = false }: Props) {
  return (
    <Container>
      <SectionTitle title={title} hasUnderline />
    </Container>
  );
}

/**
 * Styles.
 */
import { Container } from './styles'

/**
 * Type definitions.
 */
type Props = {
  title: string
}

/**
 * Component.
 */ 
export function SectionTitle({ title = 'Seu título aqui' }: Props) {
  return <Container>{title}</Container>
}

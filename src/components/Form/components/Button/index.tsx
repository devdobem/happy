/**
 * Styles.
 */
import { Container } from './styles'

/**
 * Type definitions.
 */
type Props = {
  children: React.ReactNode
}

/**
 * Component.
 */ 
export function Button({ children }: Props) {
  return <Container>{children}</Container>
}

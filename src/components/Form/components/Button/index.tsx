/**
 * Styles.
 */
import { Container } from './styles'

/**
 * Type definitions.
 */
type Props = {
  children: React.ReactNode
  onClick?(): void
}

/**
 * Component.
 */
export function Button({ children, onClick = () => {} }: Props) {
  return <Container onClick={onClick}>{children}</Container>
}

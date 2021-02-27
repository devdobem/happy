/**
 * Styles.
 */
import { Container } from './styles'

/**
 * Type definitions.
 */
type Props = {
  component: React.ReactNode
}

/**
 * Component.
 */ 
export function Xpto({ component }: Props) {
  return <Container>{component}</Container>
}

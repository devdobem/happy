
/**
 * Styling.
 */
import { Container } from './styles'

/**
 * Type definition.
 */
type Props = {
  children: React.ReactNode
}

/**
 * Component.
 */
export function Page({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}

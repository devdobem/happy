/**
 * Styles.
 */
import { Container } from './styles'

/**
 * Type definitions.
 */
type Props = {
  text: string
  isWhite?: boolean;
}

/**
 * Component.
 */
export function RegularText({ text = '', isWhite = false }: Props) {
  return <Container isWhite={isWhite}>{text}</Container>
}

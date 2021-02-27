/**
 * Styles.
 */
import { Container } from './styles'

/**
 * Type definitions.
 */
type Props = {
  text: string
}

/**
 * Component.
 */ 
export function RegularText({ text = '' }: Props) {
  return <Container>{text}</Container>
}

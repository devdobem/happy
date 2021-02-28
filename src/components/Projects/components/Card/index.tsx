/**
 * Styling.
 */
import { Container, Title, Picture, Text } from './styles'

/**
 * Type definition.
 */
type Props = {
  title: string
  picture?: string
  text: string
}

/**
 * Component.
 */
export function Card({ title, picture, text }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Picture src={picture || 'https://via.placeholder.com/520x210'} alt="Project picture"/>
      <Text>{text}</Text>
    </Container>
  )
}

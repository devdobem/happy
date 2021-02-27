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
      <Picture src={picture || 'image/600x300.png'} alt="Project picture"/>
      <Text>{text}</Text>
    </Container>
  )
}

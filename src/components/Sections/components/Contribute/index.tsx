/**
 * Styles.
 */
import { Container } from './styles';
import { RegularText } from '../../../Typography/components/RegularText';
import {Section} from '../.'


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

export function SectionTitle({
  title = 'Seu título aqui',
  hasUnderline = false,
}: Props) {
  return (
    <Container>
      <RegularText text="Nós somos uma organização sem fins lucrativos, portanto todo o dinheiro recebido através das doações são direcionados para nossos projetos sociais. Se você acredita na HAPPY e quer ajudar de alguma forma, você pode realizar uma doação através da nossa plataforma."/>
      <Text>Nós somos uma organização sem fins lucrativos, portanto todo o dinheiro recebido através das doações são direcionados para nossos projetos sociais. Se você acredita na HAPPY e quer ajudar de alguma forma, você pode realizar uma doação através da nossa plataforma.</Text>
    </Container>
  );
}

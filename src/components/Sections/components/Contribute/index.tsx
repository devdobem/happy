/**
 * Styles.
 */
import { Container } from './styles';
import { RegularText } from '../../../Typography/components/RegularText';
import { Section } from '../Section';

import { Button } from '../../../Form/components/Button'

/**
 * Component.
 */
export function Contribute() {
  return (
    <Section sectionId="contribua" title="Contribua">
      <Container>
        <RegularText text="Nós somos uma organização sem fins lucrativos, portanto todo o dinheiro recebido através das doações são direcionados para nossos projetos sociais. Se você acredita na HAPPY e quer ajudar de alguma forma, você pode realizar uma doação através da nossa plataforma."/>
        <Button>
          Quero doar
        </Button>
      </Container>
    </Section>
  );
}

import { Section } from '../Section'

import { RegularText } from '../../../Typography/components/RegularText'
import { Button } from '../../../Form/components/Button'

/**
 * Styles.
 */
import { Container, SectionContainer, Image } from './styles'


/**
 * Type definitions.
 */
type Props = {}
/**
 * Component.
 */

export function WantToBeVolunteer({}: Props) {
  return (
    <Container>
      <Section sectionId="quero-ser-voluntario" title='Quer ser um voluntário?' hasUnderline={false}>
        <SectionContainer>
          <RegularText text='Se você é da área da saúde, compartilha de nossos princípios e se interessou em nossos projetos, participe como um de nossos voluntários!' />

          <Button>Quero ser voluntário</Button>
        </SectionContainer>
      </Section>

      <Image src='/images/puzzle.svg' />
    </Container>
  );
}

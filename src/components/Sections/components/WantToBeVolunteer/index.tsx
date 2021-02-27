import { Section } from '../Section'
import { RegularText } from '../../../Typography/components/RegularText'

/**
 * Styles.
 */
import { Container } from './styles'


/**
 * Type definitions.
 */
type Props = {}
/**
 * Component.
 */

export function WantToBeVolunteer({}: Props) {
  return (
    <Section title='Quer ser um voluntário?' hasUnderline={false}>
      <RegularText text='Se você é da área da saúde, compartilha de nossos princípios e se interessou em nossos projetos, participe como um de nossos voluntários!' />
    </Section>
  );
}

/**
 * Styles.
 */
import { useState } from 'react';
import { Container, Logo, FlexContainer } from './styles';
import { Section } from '../Section';
import { RegularText } from '../../../Typography/components/RegularText';

/**
 * Type definitions.
 */

/**
 * Component.
 */

export function OurPartners() {
  const [partnersLogos, setPartnersLogos] = useState<string[]>([
    "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
    "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
    // "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
    // "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
    // "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
]);
  return (
    <Section sectionId="parceiros" title="Nossos parceiros">
      <FlexContainer>

      <RegularText text="Nossos parceiros são imprescindíveis para o crescimento do nosso projeto. Sua ajuda será revertida em nossas ações. Temos orgulho em ganhar seu incentivo e sua confiança."/>
      <Container>
        {
          partnersLogos.map((partnerLogo) => (
            <Logo src={partnerLogo}/>
            ))
          }
      </Container>
          </FlexContainer>
    </Section>
  );
}

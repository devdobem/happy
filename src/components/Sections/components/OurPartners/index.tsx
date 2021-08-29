/**
 * Styles.
 */
import { useState } from 'react';
import {  Logo, FlexContainer, PartnersContainer } from './styles';
import { Section } from '../Section';
import { RegularText } from '../../../Typography/components/RegularText';
import Carousel, { ResponsiveType } from 'react-multi-carousel'

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
    "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
    "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
    "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
  ]);
  const responsive: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      partialVisibilityGutter: 40
    },
    smallDesktop: {
      breakpoint: { max: 1300, min: 1200 },
      items: 4,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1200, min: 1090 },
      items: 3,
      partialVisibilityGutter: 40
    },
    smallTablet: {
      breakpoint: { max: 1090, min: 700 },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
      partialVisibilityGutter: 40,
    }
  }
  return (
    <Section sectionId="parceiros" title="Nossos parceiros">
      <FlexContainer>
        <RegularText text="Nossos parceiros são imprescindíveis para o crescimento do nosso projeto. Sua ajuda será revertida em nossas ações. Temos orgulho em ganhar seu incentivo e sua confiança." />
        <PartnersContainer>
        <Carousel
          swipeable
          showDots
          infinite
          partialVisible
          responsive={responsive}
        >
          {
            partnersLogos.map((partnerLogo) => (
              <Logo src={partnerLogo} key={partnerLogo}/>
            ))
          }
        </Carousel>
        </PartnersContainer>
      </FlexContainer>
    </Section>
  );
}

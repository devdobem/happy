/**
 * Styles.
 */
import {
  Container,
  VolunteerInfoContainer,
  VolunteerPicture,
  VolunteerName,
  QuoteContainer,
  Quote,
} from './styles';
import QuoteSymbol from '../../../../../../assets/quote.svg';
import { IVolunteer } from '../VolunteersExperience';
/**
 * Type definitions.
 */

/**
 * Component.
 */

export function VolunteerContainer({
  name,
  image_url,
  quote
}: IVolunteer) {
  console.log("name")
  return (
    <Container>
      <VolunteerInfoContainer>
        <VolunteerPicture src={image_url}/>
        <VolunteerName>{name}</VolunteerName>
      </VolunteerInfoContainer>
      <QuoteContainer>
        <QuoteSymbol />
      </QuoteContainer>
        <Quote>{quote}</Quote>
    </Container>
  );
}

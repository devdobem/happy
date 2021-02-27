/**
 * Styles.
 */
import { Container } from './styles'
import WhiteLogo from '../../../../assets/white-logo.svg';
import { RegularText } from '../../../Typography/components/RegularText';

/**
 * Component.
 */
export function Footer() {
  return (
    <Container>
      <WhiteLogo />
      <RegularText isWhite text="H.A.P.P.Y 2021 © All rights reserved" />
    </Container>
  );
}

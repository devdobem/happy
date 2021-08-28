/**
 * Components.
 */
import { Menu } from '../../../Menu/components/Menu'

/**
 * Styling.
 */
import { Section, Header, ColoredLogo, OrgName, OrgSlogan } from './styles'


/**
 * Component.
 */
export function Introduction() {
  return (
    <Section id="inicio">
      <Header>
        <ColoredLogo src="images/logo.svg" alt="H.A.P.P.Y logo" />
        <Menu />
      </Header>

      <OrgName>Health Awareness Promotion Program by the Youth</OrgName>
      <OrgSlogan>Levar a atenção em saúde para aqueles que precisam no Brasil e no mundo</OrgSlogan>
    </Section>
  )
}

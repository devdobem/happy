import { SectionTitle } from '../../../Typography/components/Title'

/**
 * Styles.
 */
import { Container, ChildrenContainer } from './styles'


/**
 * Type definitions.
 */
type Props = {
  title: string
  hasUnderline?: boolean;
  paddingTop?: number;
  children?: React.ReactNode;
  sectionId: string;
  hasPaddingRight?: boolean;
}
/**
 * Component.
 */

export function Section({
  title = 'Seu título aqui',
  hasUnderline = false,
  paddingTop = 0,
  children,
  hasPaddingRight = true ,
  sectionId
}: Props) {
  return (
    <Container
      id={sectionId}
      hasPaddingRight={hasPaddingRight}
      style={{
        paddingTop: paddingTop,
      }}
    >
      <SectionTitle title={title} hasUnderline={hasUnderline} />

      {children && (
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      )}
    </Container>
  );
}

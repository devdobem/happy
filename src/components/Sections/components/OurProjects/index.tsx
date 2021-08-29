import Carousel, { ResponsiveType } from 'react-multi-carousel'

/**
 * Components.
 */
import { Section } from '../Section'
import { Card as ProjectCard } from '../../../Projects/components/Card'

/**
 * Styling.
 */
import { Container } from './styles'

/**
 * Corousel configurations.
 */
const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 2,
    partialVisibilityGutter: 50
  },
  smallDesktop: {
    breakpoint: { max: 1300, min: 1200 },
    items: 1,
    partialVisibilityGutter: 300
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 1,
    partialVisibilityGutter: 200
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    partialVisibilityGutter: 0
  }
}

/**
 * Component.
 */
export function OurProjects() {
  return (
    <Section hasPaddingRight={false} sectionId="projetos" title="Nossos Projetos">
      <Container>
        <Carousel
          swipeable
          showDots
          infinite
          partialVisible
          responsive={responsive}
        >
          <ProjectCard
            title="Salve o Cairo"
            text="No bairro El Maadi, no Cairo, em janeiro de 2020, com o projeto The Good Shepherd School’s Health Awareness Course. Uma escola de refugiados, para e por refugiados, majoritariamente do Sudão do Sul e da Síria."
            />

          <ProjectCard
            title="Salve o Cairo"
            text="No bairro El Maadi, no Cairo, em janeiro de 2020, com o projeto The Good Shepherd School’s Health Awareness Course. Uma escola de refugiados, para e por refugiados, majoritariamente do Sudão do Sul e da Síria."
            />

          <ProjectCard
            title="Salve o Cairo"
            text="No bairro El Maadi, no Cairo, em janeiro de 2020, com o projeto The Good Shepherd School’s Health Awareness Course. Uma escola de refugiados, para e por refugiados, majoritariamente do Sudão do Sul e da Síria."
            />

          <ProjectCard
            title="Salve o Cairo"
            text="No bairro El Maadi, no Cairo, em janeiro de 2020, com o projeto The Good Shepherd School’s Health Awareness Course. Uma escola de refugiados, para e por refugiados, majoritariamente do Sudão do Sul e da Síria."
            />
        </Carousel>
      </Container>
    </Section>
  )
}

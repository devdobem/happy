import Carousel from 'react-multi-carousel'

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
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

/**
 * Component.
 */
export function OurProjects() {
  return (
    <Section title="Nossos Projetos">
      <Container>
        <Carousel
          swipeable
          showDots
          infinite
          removeArrowOnDeviceType={["tablet", "mobile"]}
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

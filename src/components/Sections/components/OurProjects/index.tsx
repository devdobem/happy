/**
 * Components.
 */
import { Section } from '../Section'
import { Card as ProjectCard } from '../../../Projects/components/Card'

/**
 * Styling.
 */
import {} from './styles'

/**
 * Component.
 */
export function OurProjects() {
  return (
    <Section title="Nossos Projetos">
      <Card />
    </Section>
  )
}

/**
 *
 */
function Card() {
  return (
    <ProjectCard
      title="Esse é o título."
      text="Isso é um texto de exemplo."
    />
  )
}

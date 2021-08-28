/**
 * Styling.
 */
import { Nav, List, ListItem } from './styles'

/**
 * Component.
 */
export function Menu() {
  return (
    <Nav>
      <List>
        <ListItem>
          <a href="#inicio">Início</a>
        </ListItem>
        <ListItem>
          <a href="#historia">Sobre</a>
        </ListItem>
        <ListItem>
          <a href="#contribua">Contribua</a>
        </ListItem>
        <ListItem>
          <a href="#projetos">Projetos</a>
        </ListItem>
        <ListItem>
          <a href="#contato">Contato</a>
        </ListItem>
      </List>
    </Nav>
  )
}

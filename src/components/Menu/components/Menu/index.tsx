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
          <a href="#">Início</a>
        </ListItem>
        <ListItem>
          <a href="#">Sobre</a>
        </ListItem>
        <ListItem>
          <a href="#">Projetos</a>
        </ListItem>
        <ListItem>
          <a href="#">Contribua</a>
        </ListItem>
        <ListItem>
          <a href="#">Contato</a>
        </ListItem>
      </List>
    </Nav>
  )
}

import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: none;
  }
`

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
`

export const ListItem = styled.li`
  padding: 10px;
  a {
    color: #fff;
    font-weight: 500;
  }
`

import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;

  display: flex;
  justify-content: center;

  span {
    margin-right: 10px;
  }

  height: 50px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  line-height: 27px;
  letter-spacing: -0.02em;

  cursor: pointer;

  border: none;
  background: #006CCF;
  box-shadow: 0px 2px 10px rgba(0, 108, 207, 0.17);
  border-radius: 4px;

  outline: none;

  color: #FFFFFF;

  text-transform: uppercase;
  text-align: center;
  padding: 12px 30px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

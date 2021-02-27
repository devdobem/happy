import styled from 'styled-components'

interface TextProps {
  isWhite?: boolean;
}

export const Container = styled.h2<TextProps>`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ isWhite }) => isWhite ? '#fff' : '#0D133D'}
`;

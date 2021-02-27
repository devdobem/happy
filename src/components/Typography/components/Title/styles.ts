import styled from 'styled-components'

interface TextProps {
  hasUnderline?: boolean;
}

export const Container = styled.div`
  background: lightpink;
  height: auto;
`;

export const Text = styled.h1<TextProps>`
  color: #0656B0;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.05em;
  text-align: left;
  position: ${({ hasUnderline }) =>  hasUnderline ? 'relative' : 'static'};
  margin-bottom: ${({ hasUnderline }) =>  hasUnderline ? 0 : 0}px;
`;

export const Underline = styled.div`
  background: #83BF04;
  height: 19px;
  width: 100%;
  opacity: 51%;
`;
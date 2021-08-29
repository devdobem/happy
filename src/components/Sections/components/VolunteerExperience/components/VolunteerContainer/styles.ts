import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 348px;
  width: 348px;

  max-height: 286px;
  height: 286px;


  border-radius: 4px;
  background: #CFE2F3;
`;

export const VolunteerInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
`;

export const VolunteerPicture = styled.img`
  height: 62px;
  width: 62px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const VolunteerName = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.05em;

  color: #0D133D;
`;

export const QuoteContainer = styled.div`
  display: flex;
`;

export const Quote = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 28px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
color: #0D133D;
`;

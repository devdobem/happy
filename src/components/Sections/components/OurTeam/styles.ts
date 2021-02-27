import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px 0;

  align-items: center;
`

export const AngledContainer = styled.div`
  width: 100vw;
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #CFE2F3;
`

export const PeopleContainer = styled.div`
  padding: 20px 0;

  max-width: 1000px;

  display: flex;
  flex-direction: row;
`

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 200px;
  height: 300px;
`

export const PersonImage = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 65px;
`

export const PersonName = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.05em;
  text-align: center;
`

export const PersonRole = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #0656B0;

  margin-top: -10px;
`

import React from 'react'
import styled from 'styled-components'
import { string, number } from 'prop-types'

const StyledContainer = styled.div`
  display: flex;
  margin: 1em 0 5em;
`

const StyledNumber = styled.span`
  background: #2f4858;
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  padding: 0.3em 0.5em 0.2em;
`

const StyledName = styled.h3`
  margin: 0.6em 0;
  font-size: 2.7rem;

  @media (max-width: 580px) {
    font-size: 2.5rem;
  }
`

const StyledCoalition = styled.p`
  margin: .4em 0;
  color: #aaa;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.6;

  @media (max-width: 580px) {
    font-size: 1.6rem;
  }
`

const StyledColumnPhoto = styled.div`
  flex-basis: 25%;
  display: block;

  @media (max-width: 580px) {
    flex-basis: 35%;
    padding-right: 2em;
  }
`

const StyledImage = styled.img`
  background-size: 30px auto;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;

  filter: grayscale(100%);
  max-width: 100%;
  width: auto;
  border-color: transparent;
`

const StyledContent = styled.div`
  flex: 1;
  padding-top: 1em;
`

const Candidate = ({ name, number, coalition, fotoUrl }) => (
  <StyledContainer>
    <StyledColumnPhoto>
      <StyledImage src={ fotoUrl } alt={ 'photo' } />
    </StyledColumnPhoto>
    <StyledContent>
      <StyledNumber>{ number }</StyledNumber>
      <StyledName>
        { name }
        <StyledCoalition>{ coalition }</StyledCoalition>
      </StyledName>
    </StyledContent>
  </StyledContainer>
)

Candidate.propTypes = {
  name: string,
  coalition: string,
  fotoUrl: string,
  number: number
}

export default Candidate

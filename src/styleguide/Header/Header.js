import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 5em 0;
`

const StyledH1 = styled.h1`
  display: block;
  margin: 0;
  font-size: 4rem;
  letter-spacing: -.05em;

  background-image: linear-gradient(to bottom,#2ed72a 0%,#2ed72a 40%,#ebff39 40%,#ebff39 80%,#fff 80%,#fff 100%);
  overflow: hidden;
  border-radius: 2px;

`

const StyleSpan = styled.span`
  background: #fff;
  padding: .3em 0;
  box-shadow: 10px 0 15px 20px #fff;
`

const StyledParagraph = styled.p`
  margin: .5em 0 0 0;
  padding-left: .4em;
  font-size: 1rem;
  color: #aaa;
  letter-spacing: .5em;
  text-transform: uppercase;
`

const Header = ({ title, description }) => (
  <StyledHeader>
    <StyledH1>
      <StyleSpan>{ title }</StyleSpan>
    </StyledH1>
    <StyledParagraph>{ description }</StyledParagraph>
  </StyledHeader>
)

Header.propTypes = {
  title: string,
  description: string
}

export default Header

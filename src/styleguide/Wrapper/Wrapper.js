import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 0 1.5em;
`

const Wrapper = ({ children }) => <StyledWrapper>{ children }</StyledWrapper>

Wrapper.propTypes = {
  children: node
}

export default Wrapper

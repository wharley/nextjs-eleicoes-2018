import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

const StyledContent = styled.div`
  padding-top: 3em;
`

const Content = ({ children }) => <StyledContent>{ children }</StyledContent>

Content.propTypes = {
  children: node
}

export default Content

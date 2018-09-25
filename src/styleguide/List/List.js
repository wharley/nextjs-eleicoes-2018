import React from 'react'
import { node } from 'prop-types'
import styled from 'styled-components'

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  border-bottom: 1px solid #eee;
`

const List = ({ children }) => <StyledUl>{ children }</StyledUl>

List.propTypes = {
  children: node
}

export default List

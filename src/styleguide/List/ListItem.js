import React, { Fragment } from 'react'
import { array } from 'prop-types'
import styled from 'styled-components'

const StyledLi = styled.li`
  position: relative;
  flex: 1;
  color: #aaa;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1.2em;
  padding-top: 1em;
  cursor: pointer;
  transition: color .5s ease;

  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    height: 3px;
    bottom: -2px;
    background: transparent;
  }

  &:active {
    color: #000;

    &::after {
      background: #000;
    }
  }
`

const ListItem = ({ listItem }) => (
  <Fragment>
    { listItem.map(item => (
      <StyledLi key={ item.description }>{ item.description }</StyledLi>
    )) }
  </Fragment>
)

ListItem.propTypes = {
  listItem: array
}

export default ListItem

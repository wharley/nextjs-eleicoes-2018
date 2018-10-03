import React from 'react'
import { string } from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

import List from '../../styleguide/List/List'

const ListItem = styled.a`
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

const Heading = ({ pathname }) => (
  <List>
    <Link href='/'><ListItem>Presidente</ListItem></Link>
    <Link href='/governor'><ListItem>Governador</ListItem></Link>
    <Link href='/senator'><ListItem>Senador</ListItem></Link>
    <Link href='/federal'><ListItem>Federal</ListItem></Link>
    <Link href='/state'><ListItem>Estadual</ListItem></Link>
  </List>
)

Heading.defaultProps = {
  pathname: '/'
}

Heading.propTypes = {
  pathname: string
}

export default Heading

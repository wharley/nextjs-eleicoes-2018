import React from 'react'
import styled from 'styled-components'
import { string, number } from 'prop-types'

const Container = styled.div`
  display: block;
`

const Candidate = ({ name, number }) => <Container>{ name }</Container>

Candidate.propTypes = {
  name: string,
  number: number
}

export default Candidate

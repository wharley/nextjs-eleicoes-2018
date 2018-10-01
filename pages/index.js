import React from 'react'
import fetch from 'isomorphic-unfetch'
import { array } from 'prop-types'

import Wrapper from '../src/styleguide/Wrapper/Wrapper'
import Header from '../src/styleguide/Header/Header'
import Main from '../src/components/Main/Main'

const Home = ({ candidate }) => (
  <Wrapper>
    <Header title='Eleições 2018' description={ 'Minas Gerais' } />
    <Main candidate={ candidate } />
  </Wrapper>
)

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos')
  const json = await res.json()
  return { candidate: json.candidatos }
}

Home.propTypes = {
  candidate: array
}

export default Home

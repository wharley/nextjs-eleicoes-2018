import React from 'react'
import fetch from 'isomorphic-unfetch'
import { array, string } from 'prop-types'

import Wrapper from '../src/styleguide/Wrapper/Wrapper'
import Header from '../src/styleguide/Header/Header'
import Main from '../src/components/Main/Main'

const Home = ({ candidate, pathname }) => (
  <Wrapper>
    <Header title='Eleições 2018' description={ 'Minas Gerais' } />
    <Main candidate={ candidate } pathname={ pathname } />
  </Wrapper>
)

export const getPhoto = (id, state) => {
  return fetch(`http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/${state}/2022802018/candidato/${id}`).then(res => res.json())
}

Home.getInitialProps = async ({ req, pathname }) => {
  const res = await fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos')
  const json = await res.json()

  const promises = json.candidatos.map(item => getPhoto(item.id, 'BR'))

  const data = await Promise.all(promises)

  return { candidate: data, pathname: pathname }
}

Home.propTypes = {
  candidate: array,
  pathname: string
}

export default Home

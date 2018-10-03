import React from 'react'
import fetch from 'isomorphic-unfetch'
import { array, string } from 'prop-types'

import Main from '../src/components/Main/Main'

import { getPhoto } from './index'

import Wrapper from '../src/styleguide/Wrapper/Wrapper'
import Header from '../src/styleguide/Header/Header'

const Federal = ({ candidate, pathname }) => (
  <Wrapper>
    <Header title='Eleições 2018' description={ 'Minas Gerais' } />
    <Main candidate={ candidate } pathname={ pathname } />
  </Wrapper>
)

Federal.getInitialProps = async ({ req, pathname }) => {
  const res = await fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MG/2022802018/6/candidatos')
  const json = await res.json()

  const promises = json.candidatos.map(item => getPhoto(item.id, 'MG'))

  const data = await Promise.all(promises)

  return { candidate: data, pathname: pathname }
}

Federal.propTypes = {
  candidate: array,
  pathname: string
}

export default Federal

import React from 'react'

import Wrapper from '../src/styleguide/Wrapper/Wrapper'
import Header from '../src/styleguide/Header/Header'
import Main from '../src/components/Main/Main'

const Home = () => (
  <Wrapper>
    <Header title='Eleições 2018' description={ 'Minas Gerais' } />
    <Main />
  </Wrapper>
)

export default Home

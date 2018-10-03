import React, { Fragment } from 'react'
import { array, string } from 'prop-types'

import Content from '../../styleguide/Content/Content'
import Candidate from '../../styleguide/Candidate/Candidate'

import Heading from '../Heading/Heading'

const Main = ({ candidate, pathname }) => (
  <Fragment>
    <Heading pathname={ pathname } />
    <Content>
      { candidate.map(data => (
        <Candidate
          key={ data.id }
          name={ data.nomeUrna }
          number={ data.numero }
          coalition={ data.nomeColigacao }
          fotoUrl={ data.fotoUrl }
        />
      )) }
    </Content>
  </Fragment>
)

Main.propTypes = {
  candidate: array,
  pathname: string
}

export default Main

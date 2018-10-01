import React, { Fragment } from 'react'
import { array } from 'prop-types'

import List from '../../styleguide/List/List'
import ListItem from '../../styleguide/List/ListItem'
import Content from '../../styleguide/Content/Content'
import Candidate from '../../styleguide/Candidate/Candidate'

const listItem = [
  { description: 'Presidente' },
  { description: 'Governador' },
  { description: 'Senador' },
  { description: 'Federal' },
  { description: 'Estadual' }
]

const Main = ({ candidate }) => (
  <Fragment>
    <List>
      { listItem.map(item => (
        <ListItem key={ item.description } description={ item.description } />
      )) }
    </List>
    <Content>
      { candidate.map(data => (
        <Candidate key={ data.id } name={ data.nomeUrna } number={ data.numero } />
      )) }
    </Content>
  </Fragment>
)

Main.propTypes = {
  candidate: array
}

export default Main

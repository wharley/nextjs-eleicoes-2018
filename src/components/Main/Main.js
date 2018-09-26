import React, { Fragment } from 'react'

import List from '../../styleguide/List/List'
import ListItem from '../../styleguide/List/ListItem'
import Content from '../../styleguide/Content/Content'

const listItem = [
  { description: 'Presidente' },
  { description: 'Governador' },
  { description: 'Senador' },
  { description: 'Federal' },
  { description: 'Estadual' }
]

const Main = () => (
  <Fragment>
    <List>
      { listItem.map(item => (
        <ListItem key={ item.description } description={ item.description } />
      )) }
    </List>
    <Content />
  </Fragment>
)

export default Main

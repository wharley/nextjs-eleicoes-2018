import React from 'react'

import List from '../../styleguide/List/List'
import ListItem from '../../styleguide/List/ListItem'

const listItem = [
  { description: 'Presidente' },
  { description: 'Governador' },
  { description: 'Senador' },
  { description: 'Federal' },
  { description: 'Estadual' }
]

const Main = () => (
  <List>
    <ListItem listItem={ listItem } />
  </List>
)

export default Main

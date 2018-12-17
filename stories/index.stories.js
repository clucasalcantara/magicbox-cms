import React from 'react'
import { storiesOf } from '@storybook/react'

import { TemplateExample } from './TemplateExample'
import QueryComponent from './QueryComponent'
import Page from './Page'
import pages from '../src/shared/engines/pages/pages'
import { getPageConfig } from '../src/shared/engines/pages/pageProcessor'

const content = {}

const pageConfig = {
  id: 'home',
  contentVersion: '1f839debb6e7b6b56631b12d432da6f3',
}

const client = {
  id: '132bcbaf871261',
  name: 'Effect Anonymous',
  roles: [
    'sysadmin',
    'Administrator',
    'Content'
  ]
}

storiesOf('Template Engine', module).add('TemplateExample', () => <TemplateExample content={content} />)

storiesOf('Content Engine', module).add('QueryComponent', () => (
  <QueryComponent
    type='dynamic'
    desiredComponent='oceanText'
    client={client} />
  )
)

storiesOf('Pages Engine', module).add('Page', () => (
  <Page
    config={pageConfig} />
))
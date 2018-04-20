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

storiesOf('Template Engine', module).add('TemplateExample', () => <TemplateExample content={content} />)

storiesOf('Content Engine', module).add('QueryComponent', () => (
  <QueryComponent
    type='dynamic'
    componentKey='oceanText'
    client='Jarvis' />
  )
)

storiesOf('Pages Engine', module).add('Page', () => (
  <Page
    config={pageConfig} />
))
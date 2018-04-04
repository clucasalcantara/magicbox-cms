import React from 'react'
import { storiesOf } from '@storybook/react'

import { TemplateExample } from './TemplateExample'
import QueryComponent from './QueryComponent'

const content = {}

const config = {
  templateConfig: {
    configuredComp: 'RegularText',
    theme: 'outline',
  },
  layoutConfig: {
    title: 'Example Template 2',
  },
  content: {

  }
}

storiesOf('Template Engine', module).add('TemplateExample', () => <TemplateExample content={content} />)
storiesOf('Content Engine', module).add('QueryComponent', () => <QueryComponent config={config} />)
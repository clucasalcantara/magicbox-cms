import React from 'react'
import { storiesOf } from '@storybook/react'

import { TemplateExample } from './TemplateExample'

storiesOf('App', module).add('TemplateExample', () => <TemplateExample content={content} />)

const content = {
  content: {},
}

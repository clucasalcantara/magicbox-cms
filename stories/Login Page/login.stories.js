import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Login } from '../../src/components'

storiesOf('Login Page', module).add('to Storybook', () => 
  <Login />
)